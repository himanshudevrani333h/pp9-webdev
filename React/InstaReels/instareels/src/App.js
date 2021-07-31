// import { firestore } from "./firebase";
import Login from "./Login";
import {useState} from "react"
import Home from "./Home";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

let App = ()=>{

  let [user,setUser] = useState(null);

  let userHandler = (user)=> setUser(user);
  // useEffect(() => {
  //   let f = async ()=>{
  //     let querySnapshot = await firestore.collection("posts").limit(5).orderBy("index","desc").get();
  //     querySnapshot.forEach((e)=> console.log(e.data()))
  //   }
  //   f();
  // }, [])

  return(<>
    <Router>
      <Switch>
        <Route path="/login">
          <Login userhandler ={userHandler} user = {user}/>
        </Route>
        <Route path ="/home">
          <Home user = {user}/>
        </Route>
      </Switch>
    </Router>
  </>

  )
}

export default App;
