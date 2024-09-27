import React, { Component } from "react";

export default class DesignImg extends Component {
  render() {
    return (
      <img
        className="performance"
        src={`${process.env.PUBLIC_URL}/icons/performance-overview-animate.svg`}
        alt="Logo"
      />
    );
  }
}
