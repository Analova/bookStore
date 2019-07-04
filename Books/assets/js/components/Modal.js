import React, { Component } from "react";
import { connect } from "react-redux";

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
          <div className="close-modal">
            <i className="fas fa-times" />
          </div>
          <div className="modal-grid">
            <div className="images">
              <div
                className="cover"
                style={{
                  backgroundImage: `url('https://images-na.ssl-images-amazon.com/images/I/51-%2BBEodo6L._SX258_BO1,204,203,200_.jpg')`
                }}
              />
            </div>
            <div className="info">
              <h2>Title</h2>
              <div className="info-line">
                <span className="bold"> Author: </span>
                Merry Brooks
              </div>
              <div className="info-line">
                <span className="bold"> Category: </span>
                Cooking
              </div>
              <div className="info-line">
                <span className="bold"> Oublished: </span>
                1981
              </div>
              <p className="review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique amet sit maiores quod, minus quidem, quaerat minima,
                tempore necessitatibus dignissimos officia molestiae excepturi.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps)(Modal);
