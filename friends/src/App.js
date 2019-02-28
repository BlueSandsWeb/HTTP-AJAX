import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import Friend from "./components/Friend";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      error: "",
      name: "",
      id: '',
      age: '',
      email: '',
      update: false,
      activeFriend: null,
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
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    }
    axios.post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
          name: "",
          id: '',
          age: '',
          email: ''
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleRemoveFriend = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`, id)
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  populateUpdateField = (e, friend) => {
    e.preventDefault();
    console.log(friend);
    this.setState({
      name: friend.name,
      age: friend.age,
      email: friend.email,
      update: true,
      activeFriend: friend.id,
    })
  }

  resetUpdateField = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      id: '',
      age: '',
      email: '',
      update: false,
      activeFriend: null,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cards-container">
          { this.state.friends.length === 0 ? <h3>You have no friends :(</h3> :
            this.state.friends.map((friend) => {
              return (
                <Friend
                  friend={friend}
                  key={friend.id}
                  removeFriend={this.handleRemoveFriend}
                  populateUpdateField={this.populateUpdateField}
                />
                );
              })}
        </div>
        <div className="form-container">
          <FriendForm 
            name={this.state.name}
            age={this.state.age}
            email={this.state.email} 
            handleChange={this.handleChange}
            handleAddFriend={this.handleAddFriend}
            resetUpdateField={this.resetUpdateField}
            />
        </div>
      </div>
    );
  }
}

export default App;
