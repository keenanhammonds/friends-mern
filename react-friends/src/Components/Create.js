import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleClick = e => {
    const url = "http://localhost:3001/users";
    let name = this.state.name.toString();
    const obj = { username: name, friends: 0 };
    e.preventDefault();
    axios.post(url, obj).then(res => {
      alert(`new user, ${name}, created `);
      console.log(res);
    })
  };

  handleChange = evt => {
    this.setState({
      name: [evt.target.value]
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1 lassName="users-text">Create a user!</h1>
        </div>
        <div>
          <h3>Name:</h3>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
          />
          <input onClick={evt => this.handleClick(evt)} type="submit" />
        </div>
      </div>
    );
  }
}

export default Create;
