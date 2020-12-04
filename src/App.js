import React, { Component } from "react";
import "./App.css";
import Member from "./Folder/member";
import {Person} from "./Folder/xyz";

class App extends Component {
  render() {
    return <div className="App">
      <Member />
      <Person />
      <Person />
      <Person />
      <Person />

      </div>
  }
}
export default App;
