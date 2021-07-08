//  Render function clear the div where we are going to render(display) our component and then creates a new instance of our component and displays in the given div  

// let APP = function(){      

//     return(
//         <div>
//             <h1>This is TITLe</h1>
//             <h3>This is subtitle</h3>
//             <p>Hello React!</p>
//         </div>
//     )
// }

// ReactDOM.render(<div><APP/><APP/><APP/><APP/></div> , document.querySelector("#root")); 

class Counter extends React.Component {
    state = {
      currVal: 0,
    };

    render() {
      return (
        <div>
            <button
            onClick={() => {
              this.setState({currVal:this.state.currVal + 1});
            }}
          >
            +
          </button>
          <p> {this.state.currVal} </p>
          <button
            onClick={() => {
              this.setState({currVal:this.state.currVal - 1});
            }}
          >
            -
          </button>
        </div>
      );
    }
  }

  ReactDOM.render(<div>
      <Counter/>
      <hr/>
      <Counter />
      <hr/>

      <Counter />

  </div>, document.querySelector("#root"));