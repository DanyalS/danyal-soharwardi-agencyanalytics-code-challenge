import { Component, useState } from "react";
import "./App.less";
import TabComponent from "./components/TabComponent";

export default class App extends Component {
  render() {
    return (

      <div className="wrapper">
        <TabComponent />
      </div>
      
    );
  }
}
