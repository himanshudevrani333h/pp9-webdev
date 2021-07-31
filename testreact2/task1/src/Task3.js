import Task3List from "./Task3List";
import { useState } from "react";

let Task3 = () => {
  let [inp, Setinput] = useState("");

  return (
    <div>
      <input
        placeholder="search.."
        onKeyDown={(e) => {
          if (e.code == "Enter") Setinput(e.currentTarget.value);
        }}
      />
      <Task3List capital={inp} />
    </div>
  );
};

export default Task3;
