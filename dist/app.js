webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(159);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	var _routerConverted = __webpack_require__(209);
	
	var _routerConverted2 = _interopRequireDefault(_routerConverted);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootRouter = {
	    component: 'div',
	    childRoutes: [_routerConverted2.default]
	};
	
	console.log(rootRouter);
	
	_reactDom2.default.render(_react2.default.createElement(_reactRouter2.default, { routes: rootRouter }), document.getElementById('content'));

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    path: "/",
	    component: __webpack_require__(210).default,
	    childRoutes: [{
	        path: "product-table",
	        getComponent: function getComponent(location, cb) {
	            __webpack_require__.e/* nsure */(1, function (require) {
	                cb(null, __webpack_require__(211).default);
	            });
	        }
	    }, {
	        path: "about",
	        getComponent: function getComponent(location, cb) {
	            __webpack_require__.e/* nsure */(2, function (require) {
	                cb(null, __webpack_require__(212).default);
	            });
	        }
	    }]
	};

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Index = (function (_React$Component) {
	    _inherits(Index, _React$Component);
	
	    function Index() {
	        _classCallCheck(this, Index);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Index).apply(this, arguments));
	    }
	
	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'This is a demo'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/product-table' },
	                    'Product Table'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/about', style: { marginLeft: "20px" } },
	                    'About Page'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    this.props.children || 'Index Page'
	                )
	            );
	        }
	    }]);
	
	    return Index;
	})(_react2.default.Component);
	
	exports.default = Index;

/***/ }

});
//# sourceMappingURL=app.js.map