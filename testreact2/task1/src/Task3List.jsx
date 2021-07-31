import { useState, useEffect } from "react";
let Task3List = (props) => {
  let [state, setState] = useState({});

  let link = "https://restcountries.eu/rest/v2/capital/" + props.capital;
  useEffect(() => {
    let f = async ()=>{
     let data = await fetch("https://restcountries.eu/rest/v2/capital/")
     
     setState(data.json());
     console.log(state.name);
    }

    f();
  },[props.capital]);

  if (!state) return <h1>loading..</h1>;

  return (
    <ul>
     <li>{state.name}</li>
    </ul>
  );
};

export default Task3List;
