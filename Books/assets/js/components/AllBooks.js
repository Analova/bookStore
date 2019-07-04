import React, { Component } from "react";
import { connect } from "react-redux";
import { openingInfoBook } from "../actions/allAcctions";

class AllBooks extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="all-books">
        <div className="book-conatiner">
          <div
            onClick={this.props.openingInfoBook}
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
const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(
  mapStateToProps,
  { openingInfoBook }
)(AllBooks);
