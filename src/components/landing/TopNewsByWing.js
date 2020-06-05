import React, { Component } from "react";

export default class LandingNewsByWing extends Component {
  render() {
    const timePublished = Math.floor(
      (new Date().getTime() -
        new Date(this.props.article.publishedAt).getTime()) /
        (1000 * 60)
    );
    return (
      <div className="top-news">
        <h1>{this.props.article.source.name}</h1>
        <a href={this.props.article.url}>
          <h3>{this.props.article.title}</h3>
        </a>
        {timePublished >= 60 ? (
          <p>published {Math.floor(timePublished / 60)} hours ago</p>
        ) : (
          <p>published {timePublished} minutes ago</p>
        )}
        <img src={this.props.article.urlToImage} alt="article-img" />
        <p>{this.props.article.description}</p>
        <hr />
      </div>
    );
  }
}
