
import { useEffect, useState } from "react";
function App(){                                 // cannot use hooks in class component
 
  let [state, setstate] = useState(0);  // it will not run even after function recall ** We can pass anything to the useState fn for use
   
   //case 1: works like componentDidMount if we pass an emty array of dependancy array *Note [] is must to be passed to show this lifecycle effect
   useEffect(()=>{
    console.log("use effect was executed");
  },[])

//case 2: will run after each fn call (state change )
  useEffect(()=>{
    console.log("use effect was executed");
  })

  useEffect(()=>{
    console.log("use effect was executed");
    // setstate(stat+1); infinite loop as it will run ech time when state is changed 
  })

console.log("component was rendered");

return (                         // when the state will change function will be called again 
  <div>
     <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        +
      </button>
      <p>{state}</p>
      <button
        onClick={() => {
          setstate(state - 1);
        }}
      >
        -
      </button>
  </div>
)

}

export default App