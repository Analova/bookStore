import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class MyList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section id="myList">
        <h3>My list of books</h3>
        <ul>
          <li>
            Harry Potter <span className="delete-btn">Delete</span>
          </li>
        </ul>
        <div className="close-list">Close</div>
      </section>
    );
  }
}
