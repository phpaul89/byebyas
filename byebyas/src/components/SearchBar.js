import React, { Component } from "react";

export default class SearchBar extends Component {
  handleChange = (event) => {
    this.props.setQuery(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>Hello from searchbar</h1>
        <label id="query">Search to compare the news</label>
        <input
          id="query"
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
          placeholder="Search"
        />
      </div>
    );
  }
}
