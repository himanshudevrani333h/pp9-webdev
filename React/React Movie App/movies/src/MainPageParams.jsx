import React from "react";
import { Link } from "react-router-dom";
class MainPageParams extends React.Component {
  state = {
    userData: [],
  };

  componentDidMount() {
    fetch("/user.json")
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ userData: json });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.userData.map((el) => {
            return (
              <li key={el.id}>
                <Link to={`/user/${el.id}`}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MainPageParams;
