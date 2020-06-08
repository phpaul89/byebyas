import React, { Component } from "react";
import "./TopNewsByWing.css";

export default class LandingNewsByWing extends Component {
  render() {
    const timePublished = Math.floor(
      (new Date().getTime() -
        new Date(this.props.article.publishedAt).getTime()) /
        (1000 * 60)
    );
    return (
      <div className="top-news">
        <div className="top-news-head">
          <div className="top-news-head-main">
            <h1>{this.props.article.source.name}</h1>
            <a href={this.props.article.url}>
              <h3>{this.props.article.title}</h3>
            </a>
          </div>
          <div className="top-news-head-published">
            {timePublished >= 60 ? (
              <p>published {Math.floor(timePublished / 60)} hours ago</p>
            ) : (
              <p>published {timePublished} minutes ago</p>
            )}
          </div>
        </div>
        <div className="top-news-image">
          <img src={this.props.article.urlToImage} alt="article-img" />
        </div>
        <div className="top-news-description">
          <p>{this.props.article.description.substring(0, 180) + "..."}</p>
        </div>
      </div>
    );
  }
}
