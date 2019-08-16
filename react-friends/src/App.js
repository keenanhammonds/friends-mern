import React, { Component } from "react";
import Users from "./Components/Users";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import DeleteUser from "./Components/DeleteUser";
import Edit from "./Components/Edit";
import Create from './Components/Create'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/Users").then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  // make the routes for the pages we are going to use

  render() {
    console.log('test')
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
          <h1>Friends</h1>
          </Link>
          <nav>
            <Link to="/delete">
              <h3>Delete</h3>
            </Link>
            <Link to="/edit">
              <h3>Edit</h3>
            </Link>
            <Link to="/create">
              <h3>Create</h3>
            </Link>
          </nav>
        </header>

        <main>
          <Route path="/" exact render={routerProps => <Users />} />

          <Route path="/delete" exact render={routerProps => <DeleteUser />} />

          <Route path="/edit" exact render={routerProps => <Edit />} />

          <Route path="/create" exact render={routerProps => <Create />} />
        </main>
      </div>
    );
  }
}

export default App;
