class Input extends React.Component {
  state = { task: "" };

  render() {
    return (
      <div>
        {/* jab hum input mai kuch bhi change ya type karte hai to wo re-render ho jaata hai thatswhy we are doing below thing */}
        <input
          type="text"
          value={this.state.task}
          onChange={(e) => {
            this.setState({ task: e.currentTarget.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.props.taskHandlerFunction(this.state.task);
            this.setState({ task: "" });
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
