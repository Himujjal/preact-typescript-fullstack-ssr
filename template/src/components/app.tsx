import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";

interface IAppProps {
  data: number;
}

export default class App extends Component<IAppProps> {
  currentUrl = "";

  /** Gets fired when the route changes.*/
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
        <h2>{this.props.data}</h2>
      </div>
    );
  }
}
