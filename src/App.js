import React, { Component } from "react";
import "./App.css";
import Member from "./Folder/member";
import {Person} from "./Folder/xyz";

class App extends Component {
  state = {
    persons: [
      {name: 'Kamaal', age: 22},
      {name: 'Ajay Singla', age: 28},
      {name: 'Amit Malik', age: 26},
]
  }

  switchNameHandler = () => {
    // console.log('clicked')
    this.setState({
      persons: [
        {name: "Mohd", age: 25},
        {name: "Stefan", age: 30},
        {name: "Damon", age: 35}
      ]
    })
  }
  render() {
    return <div className="App">
      <Member />
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      <button onClick={this.switchNameHandler}>Switch Button</button>

      </div>
  }
}
export default App;
