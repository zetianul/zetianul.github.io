(self["webpackChunkzetianul_github_io"] = self["webpackChunkzetianul_github_io"] || []).push([[775],{

/***/ 775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ pages_games
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/games/style.less
var style = __webpack_require__(608);
;// CONCATENATED MODULE: ./src/pages/games/style.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);



/* harmony default export */ const games_style = (style/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/games/tetris/style.less
var tetris_style = __webpack_require__(736);
;// CONCATENATED MODULE: ./src/pages/games/tetris/style.less

            

var style_options = {};

style_options.insert = "head";
style_options.singleton = false;

var style_update = injectStylesIntoStyleTag_default()(tetris_style/* default */.Z, style_options);



/* harmony default export */ const games_tetris_style = (tetris_style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/pages/games/tetris/index.tsx



var Tetris = function Tetris() {
  return /*#__PURE__*/react.createElement("div", null, "\u4FC4\u7F57\u65AF\u65B9\u5757\u54E61");
};

/* harmony default export */ const tetris = (Tetris);
;// CONCATENATED MODULE: ./src/uitls/index.tsx
var fitBezier = function fitBezier(c) {
  return -(c * c) + 1.7 * c;
};
var throttle = function throttle(func, time) {
  var timer = null;
  return function () {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    if (timer) return;
    timer = setTimeout(function () {
      func.apply(void 0, arg);
      timer = null;
    }, time);
  };
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/AnimationBox/style.less
var AnimationBox_style = __webpack_require__(272);
;// CONCATENATED MODULE: ./src/components/AnimationBox/style.less

            

var AnimationBox_style_options = {};

AnimationBox_style_options.insert = "head";
AnimationBox_style_options.singleton = false;

var AnimationBox_style_update = injectStylesIntoStyleTag_default()(AnimationBox_style/* default */.Z, AnimationBox_style_options);



/* harmony default export */ const components_AnimationBox_style = (AnimationBox_style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/components/AnimationBox/index.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var AnimationType;

(function (AnimationType) {
  AnimationType[AnimationType["move"] = 0] = "move";
  AnimationType[AnimationType["new"] = 1] = "new";
  AnimationType[AnimationType["merge"] = 2] = "merge";
})(AnimationType || (AnimationType = {}));

/* harmony default export */ const AnimationBox = (function (props) {
  var _useState = (0,react.useState)(props.number / 2),
      _useState2 = _slicedToArray(_useState, 2),
      mergeNumber = _useState2[0],
      setMergeNumber = _useState2[1];

  var movingRef = (0,react.useRef)(null);
  var mixRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    setMergeNumber(props.number / 2);
    var startTime = Date.now();

    var recursion = function recursion() {
      var res = Date.now() - startTime;

      if (props.animationType === AnimationType["new"]) {
        if (res > props.time) {
          movingRef.current.style.transform = "scale(".concat(1, ")");
          return;
        } else {
          requestAnimationFrame(function () {
            movingRef.current.style.transform = "scale(".concat(fitBezier(res / props.time), ")");
            recursion();
          });
        }
      } else if (props.animationType === AnimationType.merge) {
        if (res > props.time) {
          mixRef.current.style.top = "0px";
          mixRef.current.style.left = "0px";
          movingRef.current.style.top = "0px";
          movingRef.current.style.left = "0px";
          setMergeNumber(props.number);
          return;
        } else {
          requestAnimationFrame(function () {
            movingRef.current.style.top = "".concat(props.top - props.top * (res / props.time), "px");
            movingRef.current.style.left = "".concat(props.left - props.left * (res / props.time), "px");

            if (!(props.baseTop === 0 && props.baseLeft === 0)) {
              mixRef.current.style.top = "".concat(props.baseTop - props.baseTop * (res / props.time), "px");
              mixRef.current.style.left = "".concat(props.baseLeft - props.baseLeft * (res / props.time), "px");
            }

            recursion();
          });
        }
      } else {
        if (props.baseLeft === 0 && props.baseTop === 0 || res > props.time) {
          movingRef.current.style.top = "0px";
          movingRef.current.style.left = "0px";
          return;
        } else {
          requestAnimationFrame(function () {
            movingRef.current.style.top = "".concat(props.baseTop - props.baseTop * (res / props.time), "px");
            movingRef.current.style.left = "".concat(props.baseLeft - props.baseLeft * (res / props.time), "px");
            recursion();
          });
        }
      }
    };

    recursion();
  }, [props.left, props.top, props.animationType]);
  return /*#__PURE__*/react.createElement("div", {
    className: "inner-container"
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("moving-box", {
      empty: props.number === 0,
      "new": props.animationType === AnimationType["new"]
    }),
    ref: movingRef,
    style: {
      left: (props.animationType === AnimationType.merge ? props.left : props.baseLeft) || 0,
      top: (props.animationType === AnimationType.merge ? props.top : props.baseTop) || 0
    }
  }, props.number === 0 ? null : props.animationType !== AnimationType.merge ? props.number : props.number / 2), props.animationType === AnimationType.merge && /*#__PURE__*/react.createElement("div", {
    className: "mix-box",
    ref: mixRef,
    style: {
      left: props.baseLeft || 0,
      top: props.baseTop || 0
    }
  }, mergeNumber));
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/games/2048/style.less
var _2048_style = __webpack_require__(290);
;// CONCATENATED MODULE: ./src/pages/games/2048/style.less

            

var _2048_style_options = {};

_2048_style_options.insert = "head";
_2048_style_options.singleton = false;

var _2048_style_update = injectStylesIntoStyleTag_default()(_2048_style/* default */.Z, _2048_style_options);



/* harmony default export */ const games_2048_style = (_2048_style/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/pages/games/2048/index.tsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _2048_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _2048_arrayLikeToArray(arr); }

function _2048_slicedToArray(arr, i) { return _2048_arrayWithHoles(arr) || _2048_iterableToArrayLimit(arr, i) || _2048_unsupportedIterableToArray(arr, i) || _2048_nonIterableRest(); }

function _2048_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _2048_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _2048_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _2048_arrayLikeToArray(o, minLen); }

function _2048_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _2048_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _2048_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var TowZeroFourEight = /*#__PURE__*/function (_React$Component) {
  _inherits(TowZeroFourEight, _React$Component);

  var _super = _createSuper(TowZeroFourEight);

  function TowZeroFourEight(props) {
    var _this;

    _classCallCheck(this, TowZeroFourEight);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isMobile", false);

    _defineProperty(_assertThisInitialized(_this), "blockWidth", 120);

    _defineProperty(_assertThisInitialized(_this), "touchStartX", void 0);

    _defineProperty(_assertThisInitialized(_this), "touchStartY", void 0);

    _defineProperty(_assertThisInitialized(_this), "touchX", void 0);

    _defineProperty(_assertThisInitialized(_this), "touchY", void 0);

    _defineProperty(_assertThisInitialized(_this), "calculating", false);

    _defineProperty(_assertThisInitialized(_this), "ref", /*#__PURE__*/react.createRef());

    _defineProperty(_assertThisInitialized(_this), "keyDownListener", function (e) {
      var keyCode = e.keyCode;
      if (_this.calculating) return;

      if (keyCode === 37) {
        _this.handleMove();
      } else if (keyCode === 38) {
        _this.handleMove(function (x, y) {
          return [y, x];
        });
      } else if (keyCode === 39) {
        _this.handleMove(function (x, y) {
          return [x, 3 - y];
        });
      } else if (keyCode === 40) {
        _this.handleMove(function (x, y) {
          return [3 - y, x];
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "touchStart", function (e) {
      var _e$touches$, _e$touches$2;

      _this.touchStartX = (_e$touches$ = e.touches[0]) === null || _e$touches$ === void 0 ? void 0 : _e$touches$.pageX;
      _this.touchStartY = (_e$touches$2 = e.touches[0]) === null || _e$touches$2 === void 0 ? void 0 : _e$touches$2.pageY;
    });

    _defineProperty(_assertThisInitialized(_this), "touchMove", throttle(function (e) {
      var _e$touches$3, _e$touches$4;

      _this.touchX = ((_e$touches$3 = e.touches[0]) === null || _e$touches$3 === void 0 ? void 0 : _e$touches$3.pageX) - _this.touchStartX;
      _this.touchY = ((_e$touches$4 = e.touches[0]) === null || _e$touches$4 === void 0 ? void 0 : _e$touches$4.pageY) - _this.touchStartY;
    }, 80));

    _defineProperty(_assertThisInitialized(_this), "touchEnd", function (e) {
      var X = Math.abs(_this.touchX || 0);
      var Y = Math.abs(_this.touchY || 0);
      if (X <= 5 && Y <= 5) return;

      if (Math.abs(_this.touchX) > Math.abs(_this.touchY)) {
        if (_this.touchX > 0) {
          _this.handleMove(function (x, y) {
            return [x, 3 - y];
          });
        } else {
          _this.handleMove();
        }
      } else {
        if (_this.touchY > 0) {
          _this.handleMove(function (x, y) {
            return [3 - y, x];
          });
        } else {
          _this.handleMove(function (x, y) {
            return [y, x];
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMove", function () {
      var transform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x, y) {
        return [x, y];
      };
      _this.calculating = true;
      var lines = _this.state.lines;
      var newLines = []; // deepcopy

      for (var i = 0; i < 4; i++) {
        newLines[i] = [];

        for (var j = 0; j < 4; j++) {
          var _transform = transform(i, j),
              _transform2 = _2048_slicedToArray(_transform, 2),
              x1 = _transform2[0],
              y1 = _transform2[1];

          if (lines[x1][y1].number !== 0) {
            var item = newLines[i][newLines[i].length - 1]; // console.log(newLines.map(i => i.map(j => j.number)), newLines[i][newLines[i].length - 1]?.number, lines[x1][y1]?.number)

            if (newLines[i].length > 0 && item.number === lines[x1][y1].number && !item.merged) {
              item.number *= 2;
              item.merged = true;
              item.animationType = AnimationType.merge;

              var _transform3 = transform(i, newLines[i].length - 1),
                  _transform4 = _2048_slicedToArray(_transform3, 2),
                  x2 = _transform4[0],
                  y2 = _transform4[1];

              item.startLeft = (y1 - y2) * _this.blockWidth;
              item.startTop = (x1 - x2) * _this.blockWidth;
            } else {
              var newItem = Object.assign({}, lines[x1][y1], {
                animationType: AnimationType.move
              });
              newLines[i].push(newItem);

              if (newLines[i].length - 1 !== j) {
                var _transform5 = transform(i, newLines[i].length - 1),
                    _transform6 = _2048_slicedToArray(_transform5, 2),
                    _x = _transform6[0],
                    _y = _transform6[1];

                newItem.baseLeft = (y1 - _y) * _this.blockWidth;
                newItem.baseTop = (x1 - _x) * _this.blockWidth;
              } else {
                newItem.baseLeft = 0;
                newItem.baseTop = 0;
              }
            }
          }
        }

        newLines[i] = [].concat(_toConsumableArray(newLines[i]), [{
          number: 0
        }, {
          number: 0
        }, {
          number: 0
        }, {
          number: 0
        }]).slice(0, 4);
      }

      var transformLines = [[], [], [], []];

      for (var _i2 = 0; _i2 < 4; _i2++) {
        for (var _j = 0; _j < 4; _j++) {
          var _transform7 = transform(_i2, _j),
              _transform8 = _2048_slicedToArray(_transform7, 2),
              _x2 = _transform8[0],
              _y2 = _transform8[1];

          transformLines[_x2][_y2] = newLines[_i2][_j];
          transformLines[_x2][_y2].merged = false;
        }
      }

      if (_this.getMatrix(lines) !== _this.getMatrix(transformLines)) {
        _this.generateRandomNumbers(transformLines, 1, 2);
      }

      _this.setState({
        lines: transformLines
      }, function () {
        _this.calculating = false;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "generateRandomNumbers", function (lines, nums, number) {
      var able = [];

      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (lines[i][j].number === 0) {
            able.push(i * 4 + j);
          }
        }
      }

      console.log(able);

      for (var _i3 = 0; _i3 < nums; _i3++) {
        if (able.length === 0) return;
        var p = Math.floor(Math.random() * able.length);
        var index = able[p];
        var chosenOne = lines[Math.floor(index / 4)][index % 4];
        chosenOne.number = number;
        chosenOne.animationType = AnimationType.new;
        able.splice(p, 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getMatrix", function (lines) {
      return lines.map(function (i) {
        return i.map(function (item) {
          return item.number;
        }).join('-');
      }).join('\n');
    });

    var temp = [];

    for (var i = 0; i < 4; i++) {
      temp.push([]);

      for (var j = 0; j < 4; j++) {
        temp[i].push({
          number: 0
        });
      }
    }

    _this.generateRandomNumbers(temp, 2, 2);

    if (document.body.clientWidth < 420) {
      _this.isMobile = true;
    }

    _this.state = {
      lines: temp
    };
    return _this;
  }

  _createClass(TowZeroFourEight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isMobile) {
        this.ref.current.addEventListener('touchstart', this.touchStart);
        this.ref.current.addEventListener('touchmove', this.touchMove);
        this.ref.current.addEventListener('touchend', this.touchEnd);
        this.blockWidth = this.ref.current.querySelector('.block').clientWidth;
      } else {
        document.addEventListener("keydown", this.keyDownListener);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isMobile) {
        this.ref.current.removeEventListener('touchstart', this.touchStart);
        this.ref.current.removeEventListener('touchmove', this.touchMove);
        this.ref.current.removeEventListener('touchend', this.touchEnd);
      } else {
        document.removeEventListener("keydown", this.keyDownListener);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var lines = this.state.lines;
      return /*#__PURE__*/react.createElement("div", {
        className: "t-2048-container",
        ref: this.ref
      }, lines.map(function (line, x) {
        return line.map(function (item, y) {
          return /*#__PURE__*/react.createElement("div", {
            className: classnames_default()("block", {
              empty: item.number === 0
            })
          }, /*#__PURE__*/react.createElement(AnimationBox, {
            number: item.number,
            top: item.startTop || 0,
            left: item.startLeft || 0,
            baseTop: item.baseTop || 0,
            baseLeft: item.baseLeft || 0,
            time: 120,
            animationType: item.animationType
          }));
        });
      }));
    }
  }]);

  return TowZeroFourEight;
}(react.Component);

/* harmony default export */ const _2048 = (TowZeroFourEight);
;// CONCATENATED MODULE: ./src/pages/games/config.tsx



var games = [{
  name: '2048',
  component: /*#__PURE__*/react.createElement(_2048, null)
}, {
  name: 'tetris',
  component: /*#__PURE__*/react.createElement(tetris, null)
}];
;// CONCATENATED MODULE: ./src/pages/games/index.tsx
function games_slicedToArray(arr, i) { return games_arrayWithHoles(arr) || games_iterableToArrayLimit(arr, i) || games_unsupportedIterableToArray(arr, i) || games_nonIterableRest(); }

function games_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function games_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return games_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return games_arrayLikeToArray(o, minLen); }

function games_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function games_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function games_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ const pages_games = (function () {
  var _useState = (0,react.useState)(0),
      _useState2 = games_slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  console.log(games);
  return /*#__PURE__*/react.createElement("div", {
    className: "games"
  }, /*#__PURE__*/react.createElement("div", {
    className: "title"
  }, "\u6E38\u620Fdemo"), /*#__PURE__*/react.createElement("div", {
    className: "tabs"
  }, games.map(function (i, index) {
    return /*#__PURE__*/react.createElement("a", {
      onClick: function onClick() {
        setCurrent(index);
      },
      className: classnames_default()("tab", {
        selected: index === current
      })
    }, i.name);
  })), /*#__PURE__*/react.createElement("div", null, games[current].component));
});

/***/ }),

/***/ 184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 272:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".inner-container {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background-color: rgba(238, 228, 218, 0.35);\n}\n.inner-container .moving-box {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  color: #776e65;\n  background-color: #eee4da;\n  z-index: 1;\n}\n.inner-container .moving-box.empty {\n  background: transparent;\n}\n.inner-container .moving-box.new {\n  animation: new-box cubic-bezier(0.66, 0.08, 0.44, 1.18) 0.3s;\n}\n.inner-container .mix-box {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  color: #776e65;\n  background-color: #eee4da;\n  z-index: 1;\n}\n@keyframes new-box {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".t-2048-container {\n  height: 510px;\n  width: 510px;\n  border-radius: 8px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(4, 120px);\n  grid-template-rows: repeat(4, 120px);\n  column-gap: 10px;\n  row-gap: 10px;\n  padding: 10px;\n  position: relative;\n  background: #bbada0;\n}\n.t-2048-container .block {\n  position: relative;\n  background-color: rgba(238, 228, 218, 0.35);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #776e65;\n  font-weight: 900;\n  font-size: 52px;\n}\n@media screen and (max-device-width: 420px) {\n  #root {\n    overflow: hidden;\n  }\n  .games {\n    padding: 3vw;\n  }\n  .t-2048-container {\n    width: 94vw;\n    height: 94vw;\n    box-sizing: border-box;\n    grid-template-columns: repeat(4, 21vw);\n    grid-template-rows: repeat(4, 21vw);\n    column-gap: 2vw;\n    row-gap: 2vw;\n    padding: 2vw;\n  }\n  .t-2048-container .block {\n    font-size: 2.6rem;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".games {\n  padding: 24px 24px;\n  max-width: 1200px;\n  margin: auto;\n  background: rgba(133, 133, 229, 0.1);\n  height: 100% ;\n  box-sizing: border-box;\n}\n.games .title {\n  font-size: 40px;\n  color: #333333;\n  padding: 12px 0;\n}\n.games .tabs {\n  padding: 12px 0;\n  margin-bottom: 12px;\n  border-bottom: 1px solid #777777;\n}\n.games .tabs .tab {\n  cursor: pointer;\n  color: #666666;\n  font-size: 36px;\n}\n.games .tabs .tab:not(:last-child) {\n  margin-right: 36px;\n}\n.games .tabs .tab.selected {\n  font-weight: 800;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);