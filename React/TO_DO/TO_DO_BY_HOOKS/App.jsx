import {useState} from "react"
  function App(){
    let [state1, setstate1] = useState([]); 
    let [state2, setstate2] = useState([]); 

//    taskHandler = (value)=>{
//     // let tempArray = this.state.taskData;
//     // tempArray.push(value);
//     // this.setState({taskData:tempArray})
//     setstate1(state1 + value)
//    }
   
//    removetask=(task)=>{
//        let filteredArray = state2.filter((e)=>{
//            return e != task;
//        })

//     //    this.setState({taskData:filteredArray});
//        setstate2(filteredArray)
//    }

  return(
        <div>
            <Input taskHandler = {setstate1}/>               {/* "to return Input.jsx here" */}
            <List  removefn = {setstate2} tasks = {state2.taskData}/>
        </div>
    )
   
  }

ReactDOM.render(<div>
    <App/>
</div>, document.querySelector("#root"));