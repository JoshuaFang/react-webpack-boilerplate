webpackJsonp([1],{

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DATA = [{ id: 0, category: "Sports Goods", name: "Footbal", price: "10.00" }, { id: 1, category: "Sports Goods", name: "Bascketball", price: "20.00" }, { id: 2, category: "Sports Goods", name: "Baseball", price: "5.00" }, { id: 3, category: "Electronics", name: "iPad", price: "600.00" }, { id: 4, category: "Electronics", name: "Nexus 5", price: "700.00" }, { id: 4, category: "Car", name: "Tesla", price: "700K" }];
	
	var CategoryListItem = (function (_React$Component) {
	    _inherits(CategoryListItem, _React$Component);
	
	    function CategoryListItem() {
	        _classCallCheck(this, CategoryListItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryListItem).apply(this, arguments));
	    }
	
	    _createClass(CategoryListItem, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "tr",
	                null,
	                _react2.default.createElement(
	                    "td",
	                    null,
	                    this.props.name
	                ),
	                _react2.default.createElement(
	                    "td",
	                    null,
	                    " $ ",
	                    this.props.price
	                )
	            );
	        }
	    }]);
	
	    return CategoryListItem;
	})(_react2.default.Component);
	
	var CategoryList = (function (_React$Component2) {
	    _inherits(CategoryList, _React$Component2);
	
	    function CategoryList() {
	        _classCallCheck(this, CategoryList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryList).apply(this, arguments));
	    }
	
	    _createClass(CategoryList, [{
	        key: "render",
	        value: function render() {
	            var rows = this.props.categoryItems.map(function (item) {
	                return _react2.default.createElement(CategoryListItem, { key: item.id, name: item.name, price: item.price });
	            });
	            return _react2.default.createElement(
	                "tbody",
	                null,
	                _react2.default.createElement(
	                    "tr",
	                    null,
	                    _react2.default.createElement(
	                        "td",
	                        { colSpan: "2" },
	                        _react2.default.createElement(
	                            "strong",
	                            null,
	                            this.props.categoryName
	                        )
	                    )
	                ),
	                rows
	            );
	        }
	    }]);
	
	    return CategoryList;
	})(_react2.default.Component);
	
	var ProductLsit = (function (_React$Component3) {
	    _inherits(ProductLsit, _React$Component3);
	
	    function ProductLsit() {
	        _classCallCheck(this, ProductLsit);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductLsit).apply(this, arguments));
	    }
	
	    _createClass(ProductLsit, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "table",
	                null,
	                this.props.products.map(function (item) {
	                    return _react2.default.createElement(CategoryList, { key: item.id, categoryName: item.categoryName,
	                        categoryItems: item.categoryItems });
	                })
	            );
	        }
	    }]);
	
	    return ProductLsit;
	})(_react2.default.Component);
	
	var SearchTable = (function (_React$Component4) {
	    _inherits(SearchTable, _React$Component4);
	
	    function SearchTable() {
	        _classCallCheck(this, SearchTable);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchTable).apply(this, arguments));
	    }
	
	    _createClass(SearchTable, [{
	        key: "handleInput",
	        value: function handleInput() {
	            this.props.onInputChange(this.refs.searchText.value);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "form",
	                null,
	                _react2.default.createElement("input", { type: "text", ref: "searchText", onChange: this.handleInput.bind(this) })
	            );
	        }
	    }]);
	
	    return SearchTable;
	})(_react2.default.Component);
	
	var ProductTable = (function (_React$Component5) {
	    _inherits(ProductTable, _React$Component5);
	
	    function ProductTable(props) {
	        _classCallCheck(this, ProductTable);
	
	        var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductTable).call(this, props));
	
	        _this5.state = {
	            products: DATA
	        };
	        return _this5;
	    }
	
	    _createClass(ProductTable, [{
	        key: "inputChange",
	        value: function inputChange(val) {
	            this.setState({
	                products: DATA.filter(function (item) {
	                    return item.name.indexOf(val) > -1;
	                })
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var map = {},
	                products = [];
	            this.state.products.forEach(function (data) {
	                if (!map[data.category]) map[data.category] = [];
	                map[data.category].push(data);
	            });
	            products = Object.keys(map).map(function (key, index) {
	                return { id: "group" + index++, categoryName: key, categoryItems: map[key] };
	            });
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(SearchTable, { onInputChange: this.inputChange.bind(this) }),
	                _react2.default.createElement(ProductLsit, { products: products })
	            );
	        }
	    }]);
	
	    return ProductTable;
	})(_react2.default.Component);
	
	exports.default = ProductTable;

/***/ }

});
//# sourceMappingURL=1.chunk.js.map