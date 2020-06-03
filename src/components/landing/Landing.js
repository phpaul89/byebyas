import React, { Component } from "react";
import SearchBar from "../SearchBar";
import data from "../../data.json";
import ContainerByWing from "./ContainerByWing";
//import axios from "axios";

export default class Landing extends Component {
  state = {
    articles: [],
    query: "",
    wings: ["CNN", "NBC News", "Engadget", "BBC News", "Fox News"],
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
          {this.state.articles.length &&
            this.state.wings.map((wing, i) => (
              <ContainerByWing
                wing={wing}
                articles={this.state.articles}
                key={i}
              />
            ))}
        </div>
      </div>
    );
  }
}
