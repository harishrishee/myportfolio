import React, { Component } from "react";

export default class CypressImg extends Component {
  render() {
    return (
      <img
        className="performance"
        src={`${process.env.PUBLIC_URL}/icons/product-iteration-animate.svg`}
        alt="Logo"
      />
    );
  }
}
