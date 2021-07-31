import { useState, useEffect } from "react";
import { firestore } from "./firebase";
import "./App.css"
let App = () => {
  let [state, setState] = useState([]);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("post").onSnapshot((querySnapshot)=>{
        let arr = [];
        querySnapshot.forEach((doc) => {
          let obj = {
            id: doc.id,
            data: doc.data(),
          };
          arr.push(obj);
        });
  
        setState(arr);
      });
     
    };

    f();
    console.log(state);
  }, []);

  return (
    <div>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
           {el.data.Body}
          </li>
        ))}
      </ul>

      <input  placeholder="What's Happening?" onKeyDown={(e)=>{
     if(e.code == "Enter"){
       let post = e.currentTarget.value
       firestore.collection("post").add({Body:post});
       e.currentTarget.value = "";
     }
      }}/>
    </div>
  );
};

export default App;
