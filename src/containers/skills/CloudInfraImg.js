import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
        className="performance"
        src={`${process.env.PUBLIC_URL}/icons/cloud-hosting-animate.svg`}
        alt="Logo"
      />
    );
  }
}
