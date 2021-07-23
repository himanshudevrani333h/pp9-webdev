import React from "react";

class Category extends React.Component {
  state = {
    AllGenere: [],
  };
  componentDidMount() {
    //api call(msg bhejna=> get)
    fetch("/genre")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ AllGenere: json });
      });
  }
  render() {
    return (
      <ul class="list-group">
         <li class="list-group-item" key="allgenre" onClick={(e)=>{
           this.props.receiveFilterData("All Genre");
         }}>
              All Genre
            </li>
        {this.state.AllGenere.map((el) => {
          return (
            <li class="list-group-item" key={el._id} onClick={()=>{
              this.props.receiveFilterData(el.name);
            }}>
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category
