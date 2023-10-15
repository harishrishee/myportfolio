import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    //const theme = this.props.theme;
    return (
      <img
        className="raw_logo"
        src="path-to-your-svg-file.svg"
        alt="Logo"
      />
    );
  }
}

export default LogoLoader;
