import { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { firestore } from "./firebase";

import "./Profile.css";

let Profile = () => {
  let value = useContext(AuthContext);
  let [totalPosts, setTotalPosts] = useState([""]);

  console.log(value);

  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore
        .collection("posts")
        .where("username", "==", value.displayName)
        .get();

      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data().url);
      });
      setTotalPosts(arr);
    };

    f();
  }, []);

  return (
    <>
      {value ? (
        <div>
          <Link to="/home">
          
          <h1 className="tag">Reels</h1>
          </Link>
          <img className="img-profile" src={value.photoURL} />
          <p className="username-profile">{value.displayName}</p>
          <div className="post-container">
            {totalPosts.map((el) => {
              return (
                <div className="crd">
                  <video autoPlay loop muted src={el} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Profile;
