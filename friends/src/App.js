import React, { Component } from 'react';
import './App.css';

import Friend from "./components/Friend";
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: ["tim"],
    }
  }

  componentDidMount() {
    console.log("CDM now running")
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map((friend) => {
          return (
            <Friend friend={friend} />
          );
        })}
      </div>
    );
  }
}

export default App;
