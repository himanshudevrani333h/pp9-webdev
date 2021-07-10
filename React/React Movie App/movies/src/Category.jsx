import React from "react";

class Category extends React.Component {
  state = {
    AllGenere: ["Action", "Romance", "comedy"],
  };

  render() {
    return (
      <ul class="list-group">
        {this.state.AllGenere.map((el) => {
          return (
            <li class="list-group-item" key={el}>
              {el}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category
