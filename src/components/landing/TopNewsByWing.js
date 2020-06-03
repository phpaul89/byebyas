import React, { Component } from "react";

export default class LandingNewsByWing extends Component {
  render() {
    console.log(this.props);
    const hoursPublished =
      new Date().getHours() -
      new Date(this.props.article.publishedAt).getHours();
    return (
      <div className="top-news">
        <a href={this.props.article.url}>
          <h3>{this.props.article.title}</h3>
        </a>
        <p>published {hoursPublished} hours ago</p>
        <img src={this.props.article.urlToImage} alt="article-img" />
        <p>{this.props.article.description}</p>
      </div>
    );
  }
}
