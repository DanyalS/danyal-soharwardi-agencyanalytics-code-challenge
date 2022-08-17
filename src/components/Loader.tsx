import React, { Component } from "react";
import "./loader.less";

export default class Loader extends Component {
  render() {
    return (
      <div className="spinner-container">
        {/* <div className="loading-spinner"></div> */}
        <div className="loader"></div>
      </div>
    );
  }
}
