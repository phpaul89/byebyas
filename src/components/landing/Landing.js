import React, { Component } from "react";
import SearchBar from "../SearchBar";
//import data from "../../data.json";
import ContainerByWing from "./ContainerByWing";
import axios from "axios";
import "./Landing.css";

const apiUrl =
  "https://newsapi.org/v2/top-headlines?sources=cnn,reuters,fox-news&apiKey=4af6fe3c8cca4f4e8c5f778abe7f85b1";
const apiUrl2 =
  "https://newsapi.org/v2/top-headlines?sources=the-washington-times,msnbc&apiKey=4af6fe3c8cca4f4e8c5f778abe7f85b1";

export default class Landing extends Component {
  state = {
    articles: [],
    query: "",
    wings: ["msnbc", "cnn", "reuters", "the-washington-times", "fox-news"],
  };
  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    console.log("getting data");
    const dataFromApi = axios.get(apiUrl);
    const dataFromApi2 = axios.get(apiUrl2);

    Promise.all([dataFromApi, dataFromApi2]).then((responses) => {
      const response = [];
      response.push(responses[0].data.articles);
      response.push(responses[1].data.articles);
      this.setState({ articles: response.flat() });
    });
  };

  setQuery = (query) => {
    this.setState({ query: query });
  };

  render() {
    return (
      <div>
        <div className="searchbar">
          <SearchBar setQuery={this.setQuery} query={this.state.query} />
        </div>
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
