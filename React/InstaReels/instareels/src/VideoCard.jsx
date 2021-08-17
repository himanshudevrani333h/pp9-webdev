import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { firestore } from "./firebase";
import "./home.css";
let VideoCard = (props) => {
  let value = useContext(AuthContext);
  
  let [likecount,setlike] = useState();
  let [cmntbox, setbox] = useState(false);

  let [currentUserComment, setCurrentUserComment] = useState("");
  let [allComments, setAllComments] = useState([]);

  useEffect(() => {
    let f = async () => {
      let allCommentId = props.post.comments;
      let arr = [];

      for (let i = 0; i < allCommentId.length; i++) {
        let id = allCommentId[i];

        let doc = await firestore.collection("comments").doc(id).get();
        let commentData = { ...doc.data(), id: doc.id };
        arr.push(commentData);
      }

      setAllComments(arr);
    };

    f();
  }, [props]);

  useEffect(() => {
     let f = async ()=>{
       firestore.collection("posts").doc(`${props.post.id}`).onSnapshot((querysnapshot)=>{
         let  like = querysnapshot.data().likes;
         console.log(like);
         setlike(like);
       });
      }
      f();
    
  },[]);


  useEffect(()=>{
    let observeConfig = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const myobserver = new IntersectionObserver((elements)=>{

     elements.forEach((el)=>{
       console.log(el.target.paused);
       console.log(el.intersectionRatio);
       if( el.intersectionRatio !== 1 && !el.target.paused ){
         console.log("not fuly display");
        el.target.pause()
       }else {
        console.log(" fuly display");
        console.log(el.target.play())
         el.target.play()
         el.target.loop = true;
        // ispaused = false;
       }
     })
    },observeConfig)

    const videoEle = document.querySelector("video");
    // console.log(videoEle);
    //   if(videoEle != null){
    // videoEle.forEach((el)=>{
      myobserver.observe(videoEle);
    // })
  // }
  },[])

  return (
    <div className="video-card">
      <video
        className="video_file"
        src={props.post.url}
        onClick={(e) => {
          if (!e.currentTarget.paused) {
            e.currentTarget.pause();
          } else e.currentTarget.play();
        }}

        autoPlay="true"
      />
      <button>
      
        <span className="likeCount">{likecount == 0 ? "": likecount}</span>
        <span
          className="material-icons-outlined like"
          onClick={(e) => {
            console.log(e);
            if (e.currentTarget.innerHTML == "favorite_border") {
              e.currentTarget.innerHTML = "favorite";
              e.currentTarget.classList.add("liked");
              likecount += 1;
              firestore.collection("posts").doc(`${props.post.id}`).update({
                likes:likecount,
              })
              let arr = [props.post.id];
              firestore.collection("user").doc(value.uid).update({
                posts:arr,
              })
                // el.docs.data().posts.push(props.posts.id);
              
              setlike(likecount);
             
            } else {
              e.currentTarget.innerHTML = "favorite_border";
              e.currentTarget.classList.remove("liked");
              if(likecount -1 >=0){
                likecount -= 1;
                firestore.collection("posts").doc(`${props.post.id}`).update({
                  likes:likecount,
                })
              setlike(likecount);
              }
            }
          }}
        >
          favorite_border
        </span>
      
      </button>
      <button>
        <span
          className="material-icons-outlined comment"
          onClick={() => {
            if (cmntbox) setbox(false);
            else setbox(true);
          }}
        >
          chat_bubble
        </span>
      </button>
      <p className="username">
        <b>{props.post.username}</b>
      </p>
      <p className="song">
        <marquee>song name</marquee>
      </p>
      {cmntbox ? (
        <div className="comment-box">
          <button
            className="comment-box-close-btn"
            onClick={() => {
              setbox(false);
            }}
          >
            Close
          </button>

          <div className="all-comments">
            {allComments.map((comment, index) => {
              return (
                <div key={index}>
                  <img src={comment.pic} />
                  <div>
                    <p>
                      <b>{comment.username}</b>
                    </p>
                    <p className="inner-comment">{comment.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="comment-form">
            <input
              placeholder="Type your comment here..."
              value={currentUserComment}
              onChange={(e) => {
                setCurrentUserComment(e.currentTarget.value);
              }}
            />
            <button
              onClick={() => {
                let p = firestore.collection("comments").add({
                  comment: currentUserComment,
                  username: value.displayName,
                  pic: value.photoURL,
                });

                setCurrentUserComment("");

                p.then((docRef) => {
                  return docRef.get();
                }).then((doc) => {
                  firestore
                    .collection("posts")
                    .doc(props.post.id)
                    .update({
                      comments: [...props.post.comments, doc.id],
                    });
                });
              }}
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      ;
    </div>
  );
};

export default VideoCard;
