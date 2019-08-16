import React, { Component } from "react";
import axios from "axios";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }


  // update the state with the data as soon as page starts or component mounts
  componentDidMount() {
    this.getData();
  }

  // get the data and update the state
  getData = () => {
    axios.get("http://localhost:3001/Users").then(res => {
      this.setState({
        users: res.data
      });
    });
  };

  handleChange = evt => {
    this.setState({
      newName: [evt.target.value]
    });
  };

  // get the new name from the state and send a put req to update the db
  changeData = id => {
    let newName = this.state.newName;
    let obj = { username: newName.toString() };
    let url = `http://localhost:3001/${id}`;
    axios.put(url, obj);
  };

  // update the db and then get the data again and update the state
  handleClick = (evt, id) => {
    evt.preventDefault();
    this.changeData(id);
    this.getData();
  };

  render() {
    const users = this.state.users.map(user => {
      const id = user["_id"];
      const name = user.username;
      return (
        <div key={id}>
          <div>
            <h3>Username: {name}</h3>
            <form>
              <h3>
                Change to:{" "}
                <input
                  onChange={this.handleChange}
                  type="text"
                  placeholder="New Username"
                />
              </h3>
              <input onClick={evt => this.handleClick(evt, id)} type="submit" />
            </form>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>
          <h1 className="users-text">Change a username</h1>
        </div>
        <div>{users}</div>
      </div>
    );
  }
}

export default Edit;
