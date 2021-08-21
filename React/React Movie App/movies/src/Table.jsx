import React from "react";

class Table extends React.Component {
  state = {
    allMovies: [],
    currentPage: 1,
  };

  componentDidMount() {
    //api call(msg bhejna=> get)
    fetch("/movies")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ allMovies: json });

        this.props.sendData(json.length);
      });
  }
  render() {
    let moviesTodisplay = [];
    if (this.props.selectedgenre != "All Genre") {
      moviesTodisplay = this.state.allMovies.filter((el) => {
        return el.genre.name == this.props.selectedgenre;
      });
    } else {
      moviesTodisplay = this.state.allMovies;
    }

    if (this.props.srchdata) {
      let stringtobesearch = this.props.srchdata.toLowerCase();

      moviesTodisplay = moviesTodisplay.filter((el) => {
        return el.title.toLowerCase().includes(stringtobesearch);
      });
    }
    // console.log(moviesTodisplay);
    let arr = [];
    let paginationlength = Math.ceil(moviesTodisplay.length / 5); //for the pagination length like how many pages
    // will be there if we have many movies
    for (let i = 1; i <= paginationlength; i++) {
      arr.push(i);
    }

    let startingidx = (this.state.currentPage - 1) * 5;
    let endingidx = this.state.currentPage * 5 - 1;
    let currpageItems = moviesTodisplay.slice(
      startingidx,
      Math.min(endingidx, moviesTodisplay.length - 1) + 1
    );

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
            {currpageItems.map((el) => {
              return (
                <tr key={el._id}>
                  <td>{el.title}</td>
                  <td>{el.genre.name}</td>
                  <td>{el.numberInStock}</td>
                  <td>{el.dailyRentalRate}</td>
                  <td>
                     <i class="far fa-heart" onClick={(e)=>{
                     
                        if(e.currentTarget.classList.contains("far") && e.currentTarget.classList.contains("fa-heart") ){
                          e.currentTarget.classList.remove("far")
                          e.currentTarget.classList.remove("fa-heart")
                          e.currentTarget.classList.add("fas")
                          e.currentTarget.classList.add("fa-heart")
                        }else{
                          e.currentTarget.classList.remove("fas")
                          e.currentTarget.classList.remove("fa-heart")
                          e.currentTarget.classList.add("far")
                          e.currentTarget.classList.add("fa-heart")
                        }
                       
                       
                        // document.querySelector("i").classList.remove("fas fa-heart")
                        // document.querySelector("i").classList.add("far fa-heart")
                       
                     }}></i>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        let allMovies = this.state.allMovies;
                        allMovies = allMovies.filter((eli) => {
                          return eli._id != el._id;
                        });

                        this.props.sendData(allMovies.length);
                        this.setState({ allMovies: allMovies });
                      }}
                    >
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
            <li
              class="page-item"
              onClick={() => {
                if (this.state.currentPage - 1 > 0)
                  this.setState({ currentPage: this.state.currentPage - 1 });
              }}
            >
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            {arr.map((el) => {
              return (
                <li
                  class="page-item"
                  onClick={() => {
                    this.setState({ currentPage: el });
                  }}
                >
                  <a class="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}
            <li
              class="page-item"
              onClick={() => {
                if (this.state.currentPage + 1 <= paginationlength)
                  this.setState({ currentPage: this.state.currentPage + 1 });
              }}
            >
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
