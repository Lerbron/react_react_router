webpackJsonp([0],{38:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(){return l.a.createElement("div",{onClick:function(){h.browserHistory.push("service")}},"Mine")}function u(){return l.a.createElement("div",{onClick:function(){h.browserHistory.push("mine")}},"home")}function a(){return l.a.createElement("div",{onClick:function(){h.browserHistory.push("/")}}," service")}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),l=n.n(s),p=n(24),f=n.n(p),h=n(25),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),y(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.children)}}]),t}(s.Component),m={path:"/",component:b,indexRoute:{component:u},childRoutes:[{path:"mine",component:c},{path:"service",component:a}]},d=l.a.createElement(h.Router,{routes:m,history:h.browserHistory});try{f.a.render(d,document.getElementById("app"))}catch(e){console.log("err:",e)}}},[38]);
//# sourceMappingURL=index.js.map