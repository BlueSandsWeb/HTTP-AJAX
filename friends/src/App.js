import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import uuidv4 from "uuid/v4";

import Friend from "./components/Friend";
import NewFriendForm from "./components/NewFriendForm";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      error: "",
      addFriendName: "",
      friendId: 0,
      friendAge: 0,
      friendEmail: ''
    }
  }

  componentDidMount() {
    // http://localhost:5000 is the address to the server doorstep
    // ./friends is the endpoint
    axios.get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err
        })
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  handleAddFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      name: this.state.addFriendName,
      age: Number(this.state.friendAge),
      email: this.state.friendEmail
    }
    axios.post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          addFriendName: "",
          friendId: 0,
          friendAge: 0,
          friendEmail: ''
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="cards-container">
          { this.state.friends.length === 0 ? <h3>You have no friends :(</h3> :
            this.state.friends.map((friend) => {
            return (
              <Friend friend={friend} key={uuidv4()} />
            );
          })}
        </div>
        <div className="form-container">
          <NewFriendForm 
            handleChange={this.handleChange}
            handleAddFriend={this.handleAddFriend}
            addFriendName={this.state.addFriendName}
            friendId={this.state.friendId}
            friendAge={this.state.friendAge}
            friendEmail={this.state.friendEmail} />
        </div>
      </div>
    );
  }
}

export default App;
