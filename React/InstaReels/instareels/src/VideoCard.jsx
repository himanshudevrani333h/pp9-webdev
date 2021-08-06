import { useState } from "react";
let VideoCard = () => {
  let [cmntbox, setbox] = useState(false);
  let [palyVideo,setVideo] = useState(false);
  return (
    <div className="video-card">
      <video src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4" onClick={(e)=>{
          if(palyVideo){
              setVideo(false);
              e.currentTarget.pause();
          }else{
              
            setVideo(true);
            e.currentTarget.play();
          }
      }}/>
      <span class="material-icons-outlined like">favorite_border</span>
      <span
        class="material-icons-outlined comment"
        onClick={() => {
          if (cmntbox) setbox(false);
          else setbox(true);
        }}
      >
        chat_bubble
      </span>
      <p className="username">
        <b>@username</b>
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

          <div className="all-comments"></div>
          <div className="comment-form">
            <input />
            <button>Post</button>
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
