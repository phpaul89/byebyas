import React, { Component } from "react";

export default class SuggestedNewsByWing extends Component {
  render() {
    return (
      <div>
        <h4>More news by {this.props.wing}</h4>
        {this.props.articles.map((article, i) => {
          return (
            <div key={i}>
              <a href={article.url}>{article.title}</a> <hr />
            </div>
          );
        })}
      </div>
    );
  }
}
