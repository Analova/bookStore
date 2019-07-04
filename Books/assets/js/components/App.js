import React, { Component } from "react";
import AllBooks from "./AllBooks.js";
import MyList from "./MyList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="approot">
        <div className="container">
          <div className="open-list">
            <i className="fas fa-bars" />
          </div>
          <AllBooks />
        </div>
        <MyList />
      </div>
    );
  }
}
