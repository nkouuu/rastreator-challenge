import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import News from "./views/news/News";
import ActiveNew from "./views/activeNew/ActiveNew";
import Path from "./views/Path";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Path />
          <Switch>
            <Route path="/:id" component={ActiveNew} />
            <Route path="/" component={News} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
