import React, { Component } from "react";
import LandingNewsByWing from "./LandingNewsByWing";
import SearchBar from "../SearchBar";
import data from "../../data.json";
//import axios from "axios";

export default class Landing extends Component {
  state = {
    articles: [],
    query: "",
  };
  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    this.setState({ articles: data.articles });
  };

  setQuery = (query) => {
    this.setState({ query: query });
  };

  render() {
    return (
      <div>
        <SearchBar setQuery={this.setQuery} query={this.state.query} />
        <div className="article-container">
          {this.state.articles
            .filter((article) => {
              return article.title
                .toLowerCase()
                .includes(this.state.query.toLowerCase());
            })
            .map((article, i) => {
              return <LandingNewsByWing key={i} data={article} />;
            })}
        </div>
      </div>
    );
  }
}
