webpackJsonp([1],{206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=r(i),s=[{id:0,category:"Sports Goods",name:"Footbal",price:"10.00"},{id:1,category:"Sports Goods",name:"Bascketball",price:"20.00"},{id:2,category:"Sports Goods",name:"Baseball",price:"5.00"},{id:3,category:"Electronics",name:"iPad",price:"600.00"},{id:4,category:"Electronics",name:"Nexus 5",price:"700.00"},{id:4,category:"Car",name:"Tesla",price:"700K"}],f=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return l["default"].createElement("tr",null,l["default"].createElement("td",null,this.props.name),l["default"].createElement("td",null," $ ",this.props.price))}}]),t}(l["default"].Component),p=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props.categoryItems.map(function(e){return l["default"].createElement(f,{key:e.id,name:e.name,price:e.price})});return l["default"].createElement("tbody",null,l["default"].createElement("tr",null,l["default"].createElement("td",{colSpan:"2"},l["default"].createElement("strong",null,this.props.categoryName))),e)}}]),t}(l["default"].Component),d=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return l["default"].createElement("table",null,this.props.products.map(function(e){return l["default"].createElement(p,{key:e.id,categoryName:e.categoryName,categoryItems:e.categoryItems})}))}}]),t}(l["default"].Component),y=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"handleInput",value:function(){this.props.onInputChange(this.refs.searchText.value)}},{key:"render",value:function(){return l["default"].createElement("form",null,l["default"].createElement("input",{type:"text",ref:"searchText",onChange:this.handleInput.bind(this)}))}}]),t}(l["default"].Component),m=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={products:s},n}return u(t,e),c(t,[{key:"inputChange",value:function(e){this.setState({products:s.filter(function(t){return t.name.indexOf(e)>-1})})}},{key:"render",value:function(){var e={},t=[];return this.state.products.forEach(function(t){e[t.category]||(e[t.category]=[]),e[t.category].push(t)}),t=Object.keys(e).map(function(t,n){return{id:"group"+n++,categoryName:t,categoryItems:e[t]}}),l["default"].createElement("div",null,l["default"].createElement(y,{onInputChange:this.inputChange.bind(this)}),l["default"].createElement(d,{products:t}))}}]),t}(l["default"].Component);t["default"]=m}});