import React, { Component } from "react";
import { connect } from "react-redux";
import { closingInfoBook, addingBook } from "../actions/allAcctions.js";

class Modal extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section
        id="modal"
        className={this.props.globalState.popupOpen === true ? "active" : ""}
      >
        <div className="modal-container">
          <div className="close-modal" onClick={this.props.closingInfoBook}>
            <i className="fas fa-times" />
          </div>
          <div className="modal-grid">
            <div className="images">
              <div
                className="cover"
                style={{
                  backgroundImage: `url('${
                    this.props.globalState.openInfoBook.coverURL
                  }')`,
                  backgroundRepeat: "noRrepeat",
                  backgroundPosition: "center"
                }}
              />
            </div>
            <div className="info">
              <h2>{this.props.globalState.openInfoBook.title}</h2>
              <div className="info-line">
                <span className="bold"> Author: </span>
                {this.props.globalState.openInfoBook.author}
              </div>
              <div className="info-line">
                <span className="bold"> Category: </span>
                {this.props.globalState.openInfoBook.category}
              </div>
              <div className="info-line">
                <span className="bold"> Oublished: </span>
                {this.props.globalState.openInfoBook.published}
              </div>
              <p className="review">
                {this.props.globalState.openInfoBook.review}
              </p>
              <div
                className="add-btn"
                onClick={this.props.addingBook.bind(
                  null,
                  this.props.globalState.openInfoBook.title
                )}
              >
                Add To My List
              </div>
            </div>
          </div>
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
  {
    closingInfoBook,
    addingBook
  }
)(Modal);
