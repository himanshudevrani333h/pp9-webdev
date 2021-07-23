import React from "react";
import Category from "./Category";
import Navbar from "./Navbar";
import Search from "./Search";
import Table from "./Table";


class App extends React.Component{
  state ={
    noOfmovies:0,
    srch:"",
    genre:"All Genre"
  }

  receiveNoOfMovies = (number)=>{
    this.setState({noOfmovies:number})
  }
  
  receiveSearchData = (srch)=>{
    this.setState({srch:srch})
  }

  receiveFilterData = (genre)=>{
    this.setState({genre:genre});
  }
  
  render(){
  return (
  <React.Fragment>
    <div className="row">
      <div className="col-2 p-4">
        <Category receiveFilterData={this.receiveFilterData}/>
      </div>
      <div className="col-10 p-4">
        <div className="row">
          <div className="col-4">
          <Search noOfmovies = {this.state.noOfmovies} receiveSearchData={this.receiveSearchData}/>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-8">
            <Table sendData={this.receiveNoOfMovies} srchdata={this.state.srch} selectedgenre ={this.state.genre}/>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  );
  }
}

export default App;
