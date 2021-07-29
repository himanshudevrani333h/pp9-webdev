import Task3List from "./Task3List"
import {useState} from "react";

let Task3 =()=>{
let [inp,Setinput]= useState("");




    return(
        <div>
       <input placeholder="search.." onChange={(e)=>{Setinput(e.currentTarget.value)}}/>
       {inp?<Task3List capital={inp} />:console.log("f")}
       </div>
    )
}

export default Task3