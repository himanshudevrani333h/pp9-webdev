import React from "react";

import { Link, withRouter } from "react-router-dom";
class MainPageNext extends React.Component {
  state = {
    secondData: [],
  };

  componentDidMount() {
    fetch("/user.json")
      .then((el) => {
        return el.json();
      })
      .then((json) => {
        this.setState({ secondData: json });
      });
  }

  render() {
    let userdata = this.state.secondData.find(
      (el) => el.id == this.props.match.params.id
    );
    if (!userdata) return <h1>No data found!</h1>;

    return (
      <div>
        <Link to={"/"}>
          <button>Return</button>
        </Link>

        <h1>{userdata.name}</h1>
        <h2>Age: {userdata.age}</h2>
        <h2>Email: {userdata.email}</h2>
      </div>
    );
  }
}

export default withRouter(MainPageNext);
