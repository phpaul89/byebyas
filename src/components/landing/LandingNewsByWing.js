import React, { Component } from "react";

export default class LandingNewsByWing extends Component {
  render() {
    const hoursPublished =
      new Date().getHours() - new Date(this.props.data.publishedAt).getHours();
    return (
      <div className="article">
        <a href={this.props.data.url}>
          <h3>{this.props.data.title}</h3>
        </a>
        <p>published {hoursPublished} hours ago</p>
        <img src={this.props.data.urlToImage} alt="article-img" />
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}
