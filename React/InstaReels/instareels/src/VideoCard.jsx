import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { firestore } from "./firebase";
import "./home.css";
let VideoCard = (props) => {
  let value = useContext(AuthContext);

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
      />
      <button>
        <span
          className="material-icons-outlined like"
          onClick={(e) => {
            console.log(e);
            if (e.currentTarget.innerHTML == "favorite_border") {
              e.currentTarget.innerHTML = "favorite";
              e.currentTarget.classList.add("liked");
            } else {
              e.currentTarget.innerHTML = "favorite_border";
              e.currentTarget.classList.remove("liked");
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
