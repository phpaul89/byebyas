import React, { Component } from "react";
import "./SuggestedNewsByWing.css";

export default class SuggestedNewsByWing extends Component {
  render() {
    return (
      <div>
        {this.props.articles.map((article, i) => {
          return (
            <div className="top-news-list" key={i}>
              <div className="top-news-list-logo">Logo</div>
              <a href={article.url}>{article.title}</a>{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
