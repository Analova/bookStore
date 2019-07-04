import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class MyList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="all-books">
        <div className="book-conatiner">
          <div
            className="book"
            style={{
              backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/I/51-%2BBEodo6L._SX258_BO1,204,203,200_.jpg')`
            }}
          />
        </div>
      </section>
    );
  }
}
