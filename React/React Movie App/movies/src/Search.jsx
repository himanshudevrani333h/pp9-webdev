import React from "react";

function Search(props) {
  return (
    <div>
      <p>Showing {props.noOfmovies} movies from the database</p>
      <button type="button" class="btn btn-primary mb-4">
        New
      </button>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search..."
          onChange={(e) => {
            props.receiveSearchData(e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
