import React, { Component } from "react";
import axios from "axios";

class DeleteUser extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  delete = (id) => {
    axios.delete(`http://localhost:3001/${id}`).then(res => {
      console.log("delete", res);
    });
  };

  getData = () => {
    axios.get("http://localhost:3001/Users").then(res => {
      this.setState({
        users: res.data
      });
    });
    console.log(this.state);
  };

  handleClick = (evt, id) => {
    evt.preventDefault();
    this.delete(id);
    this.getData();
  };

  render() {
    const users = this.state.users.map(user => {
      const id = user["_id"];
      return (
          <div key={id}>
            <h3>Username:{user.username}</h3>
            <h3>Friends:{user.friends}</h3>
            <form>
              <input
                onClick={evt => this.handleClick(evt, id)}
                type="button"
                value={`delete ${user.username}`}
              />
            </form>
          </div>
      );
    });
    return (
      <div>
        <div>
          <h1>Delete a user</h1>
        </div>
        <div>{users}</div>
      </div>
    );
  }
}

export default DeleteUser;
