import { useState,useEffect } from "react";
import Activities from "./Activites";
import Button from "./Button";
import "./activity.css"
let BoardApp = () => {
  let [state, setState] = useState([]);

   useEffect(() => {
      if(state.length === 0) return;

      let p = document.createElement("p")
      p.innerText = "New activity added";
      let body = document.querySelector("body")
      p.classList.add("msg")
      body.append(p);
    

      setTimeout(()=>{
          p.remove()
      },2000)
   }, [state])


  return (
    <div>
      <Button ste={setState} data ={state}/>
      <Activities ste ={state}/>
    </div>
  );
};

export default BoardApp