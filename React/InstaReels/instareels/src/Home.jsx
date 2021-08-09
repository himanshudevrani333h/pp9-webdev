import { auth, storage, firestore } from "./firebase";
import { Redirect,Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

import { useContext, useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./home.css";
let Home = (props) => {
  let value = useContext(AuthContext);
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsubscribeSnapshot;
    unsubscribeSnapshot= firestore
      .collection("posts")
      .onSnapshot((querySnapshot) => {
        let arr = [];

        querySnapshot.forEach((docs) => {
          // console.log(docs.id);
          arr.push({ ...docs.data(), id: docs.id });
        });
        console.log(arr);
        setPosts(arr);
      });

    return () => {
      unsubscribeSnapshot();
    };
  }, []);
  return (
    <div>
      {value ? (
        <>
          <div className="posts-container">
              {console.log(posts)}
                {posts.map((el,index) => {
                  return(<VideoCard key ={index} post={el} />);
                })}
          </div>

          <button
            className="logout-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
          <Link to="/profile">
            <button id="profile">Profile</button>
          </Link>
          <input
            onChange={(e) => {
              if (!e.target.files[0]) return;

              //get file name size and type
              let { name, size, type } = e.target.files[0];

              //store the selected file so that we can upload it later on
              let file = e.target.files[0];
              console.log(name);

              size = size / Math.pow(10, 6);
              console.log(size);

              //get file type
              type = type.split("/")[0];

              //checks

              if (size > 10) {
                alert("File is too big");
              } else {
                //f1 function passed to state_changed event for upload progress
                let f1 = (snapshot) => {
                  console.log(snapshot.bytesTransferred);
                  console.log(snapshot.totalBytes);
                };
                //f2 function passed to state_changed event for error handling
                let f2 = (error) => {
                  console.log(error);
                };

                //f3 function passed to state_changed event which executes when file is uploaded
                //so that we can get the uploaded file url
                let f3 = () => {
                  //getDownloadURL method is used to generate the url, it gives a promise
                  let p = uploadtask.snapshot.ref.getDownloadURL();
                  p.then((url) => {
                    console.log(url);
                    firestore.collection("posts").add({
                      username: value.displayName,
                      url: url,
                      likes: 0,
                      comments: [],
                    });
                  });

                  console.log(p);
                };

                //using the firebase storage object we are getting reference of a file location
                //in our case posts/userId/fileName and uploading our file to that location
                let uploadtask = storage
                  .ref(`/posts/${value.uid}/${Date.now() + name}`)
                  .put(file);

                // the upload method gives us uploadTask which can be used to set up
                //state_changed event
                //this takes 3 callbacks
                uploadtask.on("state_changed", f1, f2, f3);
              }

              // upload
              e.target.value = null;
            }}
            className="upload-btn"
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;
