webpackJsonp([0],{

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _AllBooks = __webpack_require__(85);

var _AllBooks2 = _interopRequireDefault(_AllBooks);

var _MyList = __webpack_require__(86);

var _MyList2 = _interopRequireDefault(_MyList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "approot" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "open-list" },
            _react2.default.createElement("i", { className: "fas fa-bars" })
          ),
          _react2.default.createElement(_AllBooks2.default, null)
        ),
        _react2.default.createElement(_MyList2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "modal" },
        _react2.default.createElement(
          "div",
          { className: "modal-container" },
          _react2.default.createElement(
            "div",
            { className: "close-modal" },
            _react2.default.createElement("i", { className: "fas fa-times" })
          ),
          _react2.default.createElement(
            "div",
            { className: "modal-grid" },
            _react2.default.createElement(
              "div",
              { className: "images" },
              _react2.default.createElement("div", {
                className: "cover",
                style: {
                  backgroundImage: "url('https://images-na.ssl-images-amazon.com/images/I/51-%2BBEodo6L._SX258_BO1,204,203,200_.jpg')"
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "info" },
              _react2.default.createElement(
                "h2",
                null,
                "Title"
              ),
              _react2.default.createElement(
                "div",
                { className: "info-line" },
                _react2.default.createElement(
                  "span",
                  { className: "bold" },
                  " Author: "
                ),
                "Merry Brooks"
              ),
              _react2.default.createElement(
                "div",
                { className: "info-line" },
                _react2.default.createElement(
                  "span",
                  { className: "bold" },
                  " Category: "
                ),
                "Cooking"
              ),
              _react2.default.createElement(
                "div",
                { className: "info-line" },
                _react2.default.createElement(
                  "span",
                  { className: "bold" },
                  " Oublished: "
                ),
                "1981"
              ),
              _react2.default.createElement(
                "p",
                { className: "review" },
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet sit maiores quod, minus quidem, quaerat minima, tempore necessitatibus dignissimos officia molestiae excepturi."
              )
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllBooks = function (_Component) {
  _inherits(AllBooks, _Component);

  function AllBooks() {
    _classCallCheck(this, AllBooks);

    var _this = _possibleConstructorReturn(this, (AllBooks.__proto__ || Object.getPrototypeOf(AllBooks)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(AllBooks, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "myList" },
        _react2.default.createElement(
          "h3",
          null,
          "My list of books"
        ),
        _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(
            "li",
            null,
            "Harry Potter ",
            _react2.default.createElement(
              "span",
              { className: "delete-btn" },
              "Delete"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "close-list" },
          "Close"
        )
      );
    }
  }]);

  return AllBooks;
}(_react.Component);

exports.default = AllBooks;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyList = function (_Component) {
  _inherits(MyList, _Component);

  function MyList() {
    _classCallCheck(this, MyList);

    var _this = _possibleConstructorReturn(this, (MyList.__proto__ || Object.getPrototypeOf(MyList)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(MyList, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "all-books" },
        _react2.default.createElement(
          "div",
          { className: "book-conatiner" },
          _react2.default.createElement("div", {
            className: "book",
            style: {
              backgroundImage: "url('https://images-na.ssl-images-amazon.com/images/I/51-%2BBEodo6L._SX258_BO1,204,203,200_.jpg')"
            }
          })
        )
      );
    }
  }]);

  return MyList;
}(_react.Component);

exports.default = MyList;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(83);

var _App2 = _interopRequireDefault(_App);

var _Modal = __webpack_require__(84);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById("app"));
_reactDom2.default.render(_react2.default.createElement(_Modal2.default, null), document.getElementById("modalroot"));

/***/ })

},[87]);