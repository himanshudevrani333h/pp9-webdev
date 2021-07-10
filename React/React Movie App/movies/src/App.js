import React from "react";
import Category from "./Category";
import Navbar from "./Navbar";
import Search from "./Search";
import Table from "./Table";


function App( props) {
  return (
  <React.Fragment>
    <Navbar/>
    <div className="row">
      <div className="col-2 p-4">
        <Category/>
      </div>
      <div className="col-10 p-4">
        <div className="row">
          <div className="col-4">
          <Search/>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-8">
            <Table/>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  );
}

export default App;
