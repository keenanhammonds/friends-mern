import React, { Component } from "react";
import axios from "axios";
 


class Users extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }



  componentDidMount(){
    axios
    .get("http://localhost:3001/Users")
    .then(res => {
      this.setState({
        users: res.data
      });
    })
  }

  render() {
    const users = this.state.users.map(user => {
      return(
        <div key={user.username}>
          <h3 >{user.username}</h3>
        </div>
      )
    })
    return (
    <div>
      <div>
        <h1 className="users-text">A list of the Users</h1> 
      </div>
      <div>
        {users}
      </div>
    </div>
    
      
    );
  }
}

export default Users;
