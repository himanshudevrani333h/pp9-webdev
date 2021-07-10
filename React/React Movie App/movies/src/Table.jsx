import React from "react";

class Table extends React.Component {
  state = {
    allMovies: [
      {
        title: "terminator",
        genre: "action",
        rating: "8.5",
        stock: "2",
      },
      {
        title: "transformer",
        genre: "action",
        rating: "8.7",
        stock: "3",
      },
      {
        title: "transporter",
        genre: "action",
        rating: "8.5",
        stock: "5",
      },
      {
        title: "ted",
        genre: "comedy",
        rating: "8.9",
        stock: "1",
      },
    ],
  };

  render() {
    let arr = [];
    let paginationlength = Math.ceil(this.state.allMovies.length / 5); //for the pagination length like how many pages
    // will be there if we have many movies
    for (let i = 1; i <= paginationlength; i++) {
      arr.push(i);
    }
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rating</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.allMovies.map((el) => {
              return (
                <tr>
                  <td>{el.title}</td>
                  <td>{el.genre}</td>
                  <td>{el.stock}</td>
                  <td>{el.rating}</td>
                  <td>Like</td>
                  <td>
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            {arr.map((el) => {
              return (
                <li class="page-item">
                  <a class="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Table;
