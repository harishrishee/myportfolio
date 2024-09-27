import React, { Component } from "react";

export default class CypressImg extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      <img
        className="cypress"
        src={require("../../assests/images/product-iteration-animate.svg")}
        alt="Logo"
      />
    );
  }
}
