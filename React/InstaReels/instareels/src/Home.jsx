import { auth } from "./firebase";
import { Redirect } from "react-router-dom";
import { usercontext } from "./App";
import { useContext } from "react";
import VideoCard from "./VideoCard"
import "./home.css"
let Home = (props) => {
  let value = useContext(usercontext);
  return (
    <div>
      {value ? (
        <>
          <div className="posts-container">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>

          <button
            className="logout-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;
