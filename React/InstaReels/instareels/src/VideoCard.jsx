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
  
  let [savedlike, setsaved] = useState([]);
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
   firestore.collection("users").doc(value.uid).onSnapshot((querysnapshot)=>{
     let posts = querysnapshot.data().posts;
    //  if(posts.includes(props.post.id)){
    //    document.querySelector(".material-icons-outlined.like").classList.add("liked");
    //  }
     console.log(posts);
     setsaved(posts)
   })
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

        autoPlay={true}
      />
      <button className="likebtn">
      
        <span className="likeCount">{likecount == 0 ? "": likecount}</span>
        <span
          className={savedlike.includes(props.post.id)?"material-icons-outlined like liked":"material-icons-outlined like"}
          onClick={(e) => {
            console.log(e);
            if (e.currentTarget.innerHTML == "favorite_border") {
              e.currentTarget.innerHTML = "favorite";
              e.currentTarget.classList.add("liked");
              likecount += 1;
              firestore.collection("posts").doc(`${props.post.id}`).update({
                likes:likecount,
              })
              let arr = savedlike;
              if (!arr.includes(props.post.id)) arr.push(props.post.id);
              console.log(arr);
              firestore.collection("users").doc(value.uid).update({
                posts:arr,
              })
              setsaved(arr)         
              setlike(likecount);
             
            } else {
              e.currentTarget.innerHTML = "favorite_border";
              e.currentTarget.classList.remove("liked");
              if(likecount -1 >=0){
                likecount -= 1;
                firestore.collection("posts").doc(`${props.post.id}`).update({
                  likes:likecount,
                })
                let arr = savedlike;
                let filteredarr = arr.filter((el)=>{
                  return el != props.post.id;
                })
                console.log(arr);
                firestore.collection("users").doc(value.uid).update({
                  posts:filteredarr,
                })
                setsaved(filteredarr)
                setlike(likecount);
              }
            }
          }}
        >
         {savedlike.includes(props.post.id)?"favorite":"favorite_border"} 
         
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
