import { useState, useEffect } from "react";
let Task3List = (props) => {
  let [state, setState] = useState([]);

  let link = "https://restcountries.eu/rest/v2/capital/" + props.capital;
  useEffect(() => {
    fetch(link)
      .then((e) => {
        return e;
      })
      .then((res) => {
        console.log(res);
        setState(res);
      });
  }, [link]);

  if (!state) return <h1>loading..</h1>;

  return (
    <ul>
      {state.map((e) => {
        return <li>{e.name}</li>;
      })}
    </ul>
  );
};

export default Task3List;
