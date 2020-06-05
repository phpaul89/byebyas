import React, { Component } from "react";
import TopNewsByWing from "./TopNewsByWing";
import SuggestedNewsByWing from "./SuggestedNewsByWing";

export default class ContainerByWing extends Component {
  render() {
    const filterArticles = this.props.articles
      .filter((article) => article.source.id === this.props.wing)
      .slice(0, 6);
    return (
      <div className="container-by-wing">
        <TopNewsByWing article={filterArticles.shift()} />
        <SuggestedNewsByWing
          articles={filterArticles}
          wing={filterArticles[0].source.name}
        />
      </div>
    );
  }
}
