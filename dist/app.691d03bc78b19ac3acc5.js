webpackJsonp([0],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var u=n(1),r=o(u),a=n(153),l=o(a),i=n(154),c=o(i),f=n(204),d=o(f),p={component:"div",childRoutes:[d["default"]]};l["default"].render(r["default"].createElement(c["default"],{routes:p}),document.getElementById("content"))},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={path:"/",component:n(205)["default"],childRoutes:[{path:"product-table",getComponent:function(e,t){n.e(1,function(e){t(null,n(206)["default"])})}},{path:"about",getComponent:function(e,t){n.e(2,function(e){t(null,n(207)["default"])})}},{path:"page(/:id)",getComponent:function(e,t){n.e(3,function(e){t(null,n(208)["default"])})}}]}},205:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),c=o(i),f=n(154),d=function(e){function t(){return u(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("div",null,c["default"].createElement("h1",null,"This is a demo"),c["default"].createElement(f.Link,{to:"/product-table"},"Product Table"),c["default"].createElement(f.Link,{to:"/about",style:{marginLeft:"20px"}},"About Page"),c["default"].createElement(f.Link,{to:"/page",style:{marginLeft:"20px"}},"Main Page"),c["default"].createElement("div",null,this.props.children||"Index Page"))}}]),t}(c["default"].Component);t["default"]=d}});