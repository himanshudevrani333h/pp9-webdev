import { createContext, useState } from "react";

import B from "./B";
let someContext = createContext();
let someContext2 = createContext();
let A = () => {
  const [name, setName] = useState("raju");
  const [srname, setName2] = useState("rajesh");


  return (
    <someContext.Provider value={name}>
      <someContext2.Provider value={srname}>
        <B />
      </someContext2.Provider>
    </someContext.Provider>
  );
};

export default A;
export { someContext,someContext2};
