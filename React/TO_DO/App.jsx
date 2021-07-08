class App extends React.Component{
   state ={
       taskData :[],
   }

   taskHandler = (value)=>{
    let tempArray = this.state.taskData;
    tempArray.push(value);
    this.setState({taskData:tempArray})
   }
   
   removetask=(task)=>{
       let filteredArray = this.state.taskData.filter((e)=>{
           return e != task;
       })

       this.setState({taskData:filteredArray});
   }

   render() {return(
        <div>
            <Input taskHandlerFunction = {this.taskHandler}/>               {/* "to return Input.jsx here" */}
            <List  removefn = {this.removetask} tasks = {this.state.taskData}/>
        </div>
    )
   }
}

ReactDOM.render(<div>
    <App/>
</div>, document.querySelector("#root"));