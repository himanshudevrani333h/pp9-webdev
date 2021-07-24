function Input(props){
  // state = { task: "" };
  let [state, setstate] = useState(""); 



    return (
      <div>
        {/* jab hum input mai kuch bhi change ya type karte hai to wo re-render ho jaata hai thatswhy we are doing below thing */}
        <input
          type="text"
          value={this.state.task}
          onChange={(e) => {
            setState( e.currentTarget.value );
          }}
        ></input>
        <button
          onClick={() => {
            props.taskHandler(state);
            setstate("");
          }}
        >
          Submit
        </button>
      </div>
    );
        }

