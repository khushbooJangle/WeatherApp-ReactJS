import React from 'react';

const Search = (props) => {
    return (
        <div className="search-box">
            <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={props.inputHandler}
            value={props.searchInput}
            onKeyPress={props.searchHandler}
            />
      </div>
    )
}

export default Search;
