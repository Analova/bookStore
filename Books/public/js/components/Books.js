webpackJsonp([0],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _AllBooks = __webpack_require__(107);

var _AllBooks2 = _interopRequireDefault(_AllBooks);

var _MyList = __webpack_require__(108);

var _MyList2 = _interopRequireDefault(_MyList);

var _reactRedux = __webpack_require__(25);

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
        {
          id: "approot",
          className: this.props.globalState.popupOpen === true ? "popupOpen" : " "
        },
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

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return state;
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(25);

var _allAcctions = __webpack_require__(59);

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
        {
          id: "modal",
          className: this.props.globalState.popupOpen === true ? "active" : ""
        },
        _react2.default.createElement(
          "div",
          { className: "modal-container" },
          _react2.default.createElement(
            "div",
            { className: "close-modal", onClick: this.props.closingInfoBook },
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
                  backgroundImage: "url('" + this.props.globalState.openInfoBook.coverURL + "')",
                  backgroundRepeat: "noRrepeat",
                  backgroundPosition: "center"
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "info" },
              _react2.default.createElement(
                "h2",
                null,
                this.props.globalState.openInfoBook.title
              ),
              _react2.default.createElement(
                "div",
                { className: "info-line" },
                _react2.default.createElement(
                  "span",
                  { className: "bold" },
                  " Author: "
                ),
                this.props.globalState.openInfoBook.author
              ),
              _react2.default.createElement(
                "div",
                { className: "info-line" },
                _react2.default.createElement(
                  "span",
                  { className: "bold" },
                  " Category: "
                ),
                this.props.globalState.openInfoBook.category
              ),
              _react2.default.createElement(
                "div",
                { className: "info-line" },
                _react2.default.createElement(
                  "span",
                  { className: "bold" },
                  " Oublished: "
                ),
                this.props.globalState.openInfoBook.published
              ),
              _react2.default.createElement(
                "p",
                { className: "review" },
                this.props.globalState.openInfoBook.review
              )
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return state;
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  closingInfoBook: _allAcctions.closingInfoBook
})(Modal);

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(35);

var _appStateReducer = __webpack_require__(110);

var _booksDataReducer = __webpack_require__(111);

exports.default = (0, _redux.combineReducers)({
  globalState: _appStateReducer.appStateReducer,
  booksData: _booksDataReducer.booksDataReducer
});

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(25);

var _allAcctions = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllBooks = function (_Component) {
  _inherits(AllBooks, _Component);

  function AllBooks() {
    _classCallCheck(this, AllBooks);

    var _this = _possibleConstructorReturn(this, (AllBooks.__proto__ || Object.getPrototypeOf(AllBooks)).call(this));

    _this.showAllBooks = function () {
      return _this.props.booksData.map(function (b) {
        return _react2.default.createElement(
          "div",
          { key: b.id, className: "book-conatiner" },
          _react2.default.createElement("div", {
            onClick: _this.props.openingInfoBook.bind(null, b),
            className: "book",
            style: {
              backgroundImage: "url('" + b.coverURL + "')"
            }
          })
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(AllBooks, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "all-books" },
        this.showAllBooks()
      );
    }
  }]);

  return AllBooks;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return state;
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { openingInfoBook: _allAcctions.openingInfoBook })(AllBooks);

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

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

  return MyList;
}(_react.Component);

exports.default = MyList;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(57);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(25);

var _redux = __webpack_require__(35);

var _App = __webpack_require__(103);

var _App2 = _interopRequireDefault(_App);

var _Modal = __webpack_require__(104);

var _Modal2 = _interopRequireDefault(_Modal);

var _allReducers = __webpack_require__(105);

var _allReducers2 = _interopRequireDefault(_allReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_allReducers2.default);
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.getElementById("app"));
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_Modal2.default, null)
), document.getElementById("modalroot"));

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  myList: [],
  openInfoBook: {},
  popupOpen: false,
  listOpen: false
};

var newState = void 0;

var appStateReducer = exports.appStateReducer = function appStateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "ADD_BOOK":
      var myList = [].concat(_toConsumableArray(state.myList), [action.payload]);
      newState = Object.assign({}, state, { myList: myList });
      return newState;
      break;
    case "REMOVE_BOOK":
      var myList = state.myList.filter(function (item) {
        return item.id !== action.payload;
      });
      newState = Object.assign({}, state, { myList: myList });
      return newState;
      break;
    case "OPEN_INFO_BOOK":
      newState = Object.assign({}, state, {
        openInfoBook: action.payload,
        popupOpen: true
      });
      console.log("========= NEW STATE");
      console.log(newState);
      return newState;
      break;
    case "CLOSE_INFO_BOOK":
      newState = Object.assign({}, state, { popupOpen: false });
      return newState;
      break;
    case "OPEN_MY_LIST":
      newState = Object.assign({}, state, { listOpen: true });
      return newState;
      break;
    case "CLOSE_MY_LIST":
      newState = Object.assign({}, state, { listOpen: false });
      return newState;
      break;
    default:
      return state;
      break;
  }
};

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var booksDataReducer = exports.booksDataReducer = function booksDataReducer() {
  return [{
    id: 1,
    title: "Harry Potter und der Stein der Weisen",
    author: "Joanne K. Rowling",
    category: "thriller",
    published: "1999",
    coverURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556119452i/23546887._SY475_.jpg",
    review: "Harry Potter und der Stein der Weisen ist der erste Band der siebenteiligen Harry- Potter - Romanreihe von Joanne K.Rowling.Das Buch wurde am 26. Juni 1997 beim britischen Bloomsbury - Verlag mit einer Erstauflage von 500 Exemplaren veröffentlicht, die deutsche Übersetzung erschien am 28. Juli 1998 beim Carlsen Verlag"
  }, {
    id: 2,
    title: "Alice's Adventure in the Wonderland",
    author: "Joanne K. Rowling",
    category: "thriller",
    published: "1934",
    coverURL: "https://i2.wp.com/theverybesttop10.com/wp-content/uploads/2017/06/The-Top-10-Best-Selling-Books-of-All-Time-2017-8-600x890.jpg?resize=600%2C890",
    review: "Harry Potter und der Stein der Weisen ist der erste Band der siebenteiligen Harry- Potter - Romanreihe von Joanne K.Rowling.Das Buch wurde am 26. Juni 1997 beim britischen Bloomsbury - Verlag mit einer Erstauflage von 500 Exemplaren veröffentlicht, die deutsche Übersetzung erschien am 28. Juli 1998 beim Carlsen Verlag"
  }, {
    id: 3,
    title: "Harry Potter und der Stein der Weisen",
    author: "Joanne K. Rowling",
    category: "thriller",
    published: "1991",
    coverURL: "https://images-na.ssl-images-amazon.com/images/I/51LJVLfcXBL._SX324_BO1,204,203,200_.jpg",
    review: "Harry Potter und der Stein der Weisen ist der erste Band der siebenteiligen Harry- Potter - Romanreihe von Joanne K.Rowling.Das Buch wurde am 26. Juni 1997 beim britischen Bloomsbury - Verlag mit einer Erstauflage von 500 Exemplaren veröffentlicht, die deutsche Übersetzung erschien am 28. Juli 1998 beim Carlsen Verlag"
  }, {
    id: 4,
    title: "Wer die Nachtigall stört",
    author: "Joanne K. Rowling",
    category: "Roman",
    published: "1964",
    coverURL: "https://vignette.wikia.nocookie.net/batman/images/6/68/Batman_The_Man_Bats_Attack.jpg/revision/latest?cb=20140714214700",
    review: "Wer die Nachtigall stört ist ein im Jahr 1960 erschienener Roman der US-Amerikanerin Harper Lee. Das Werk handelt von Kindheit, Heranwachsen und vom Rassismus in den Südstaaten der USA. Harper Lee wurde für ihr Werk 1961 mit dem Pulitzer-Preis ausgezeichnet."
  }, {
    id: 5,
    title: "Harry Potter und der Stein der Weisen",
    author: "Joanne K. Rowling",
    category: "thriller",
    published: "1971",
    coverURL: "https://images2.medimops.eu/product/22bb39/M03551551677-large.jpg",
    review: "Harry Potter und der Stein der Weisen ist der erste Band der siebenteiligen Harry- Potter - Romanreihe von Joanne K.Rowling.Das Buch wurde am 26. Juni 1997 beim britischen Bloomsbury - Verlag mit einer Erstauflage von 500 Exemplaren veröffentlicht, die deutsche Übersetzung erschien am 28. Juli 1998 beim Carlsen Verlag"
  }, {
    id: 6,
    title: "Harry Potter und der Stein der Weisen",
    author: "Joanne K. Rowling",
    category: "thriller",
    published: "1981",
    coverURL: "https://images-na.ssl-images-amazon.com/images/I/51AwdM3XfKL._SX320_BO1,204,203,200_.jpg",
    review: "Harry Potter und der Stein der Weisen ist der erste Band der siebenteiligen Harry- Potter - Romanreihe von Joanne K.Rowling.Das Buch wurde am 26. Juni 1997 beim britischen Bloomsbury - Verlag mit einer Erstauflage von 500 Exemplaren veröffentlicht, die deutsche Übersetzung erschien am 28. Juli 1998 beim Carlsen Verlag"
  }];
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addingBook = exports.addingBook = function addingBook(book) {
  return {
    type: "ADD_BOOK",
    payload: book
  };
};

var removingBook = exports.removingBook = function removingBook(book) {
  return {
    type: "REMOVE_BOOK",
    payload: book
  };
};

var openingInfoBook = exports.openingInfoBook = function openingInfoBook(book) {
  return {
    type: "OPEN_INFO_BOOK",
    payload: book
  };
};

var closingInfoBook = exports.closingInfoBook = function closingInfoBook(book) {
  return {
    type: "CLOSE_INFO_BOOK",
    payload: book
  };
};

var openingMyList = exports.openingMyList = function openingMyList() {
  return {
    type: "OPEN_MY_LIST"
  };
};

var closingMyList = exports.closingMyList = function closingMyList() {
  return {
    type: "CLOSE_MY_LIST"
  };
};

/***/ })

},[109]);