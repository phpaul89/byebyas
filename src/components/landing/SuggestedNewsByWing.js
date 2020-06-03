import React, { Component } from "react";

export default class SuggestedNewsByWing extends Component {
  render() {
    return (
      <div>
        {this.props.articles.map((article, i) => {
          return (
            <div key={i}>
              Logo <a href={article.url}>{article.title}</a>{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
