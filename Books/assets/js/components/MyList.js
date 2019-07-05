import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { closingMyList, removingBook } from "../actions/allAcctions.js";

class MyList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  showListOfBooks = () => {
    return this.props.globalState.myList.map(book => {
      return (
        <li>
          {book}
          <span
            className="delete-btn"
            onClick={this.props.removingBook.bind(null, book)}
          >
            Delete
          </span>
        </li>
      );
    });
  };

  render() {
    return (
      <section
        id="myList"
        className={this.props.globalState.listOpen == true ? "active" : ""}
      >
        <h3>My list of books</h3>
        <ul>
          {/* <li>
            Harry Potter <span className="delete-btn">Delete</span>
          </li> */}
          {this.showListOfBooks()}
        </ul>
        <div className="close-list" onClick={this.props.closingMyList}>
          Close
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { closingMyList, removingBook }
)(MyList);
