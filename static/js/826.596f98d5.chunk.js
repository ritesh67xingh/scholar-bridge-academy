(self.webpackChunkscholarbridgeacademy=self.webpackChunkscholarbridgeacademy||[]).push([[826],{381:(t,e,n)=>{var o="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,p=f||d||Function("return this")(),h=Object.prototype.toString,y=Math.max,v=Math.min,m=function(){return p.Date.now()};function g(t,e,n){var r,i,a,s,u,l,c=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(o);function h(e){var n=r,o=i;return r=i=void 0,c=e,s=t.apply(o,n)}function g(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-c>=a}function O(){var t=m();if(g(t))return S(t);u=setTimeout(O,function(t){var n=e-(t-l);return d?v(n,a-(t-c)):n}(t))}function S(t){return u=void 0,p&&r?h(t):(r=i=void 0,s)}function _(){var t=m(),n=g(t);if(r=arguments,i=this,l=t,n){if(void 0===u)return function(t){return c=t,u=setTimeout(O,e),f?h(t):s}(l);if(d)return u=setTimeout(O,e),h(l)}return void 0===u&&(u=setTimeout(O,e)),s}return e=w(e)||0,b(n)&&(f=!!n.leading,a=(d="maxWait"in n)?y(w(n.maxWait)||0,e):a,p="trailing"in n?!!n.trailing:p),_.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},_.flush=function(){return void 0===u?s:S(m())},_}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&h.call(t)==i}(t))return r;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=u.test(t);return n||l.test(t)?c(t.slice(2),n?2:8):s.test(t)?r:+t}t.exports=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:r,maxWait:e,trailing:i})}},1497:(t,e,n)=>{"use strict";var o=n(3218);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5173:(t,e,n)=>{t.exports=n(1497)()},3218:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9776:(t,e,n)=>{"use strict";n.d(e,{Vq:()=>h});var o=n(5043),r=n(5475),i=function(){return i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)};var a="",s=null,u=null,l=null;function c(){a="",null!==s&&s.disconnect(),null!==u&&(window.clearTimeout(u),u=null)}function f(t){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(t.tagName)&&!t.hasAttribute("disabled")||["A","AREA"].includes(t.tagName)&&t.hasAttribute("href")}function d(){var t=null;if("#"===a)t=document.body;else{var e=a.replace("#","");null===(t=document.getElementById(e))&&"#top"===a&&(t=document.body)}if(null!==t){l(t);var n=t.getAttribute("tabindex");return null!==n||f(t)||t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),null!==n||f(t)||(t.blur(),t.removeAttribute("tabindex")),c(),!0}return!1}function p(t){return o.forwardRef((function(e,n){var f="";"string"===typeof e.to&&e.to.includes("#")?f="#"+e.to.split("#").slice(1).join("#"):"object"===typeof e.to&&"string"===typeof e.to.hash&&(f=e.to.hash);var p={};t===r.k2&&(p.isActive=function(t,e){return t&&t.isExact&&e.hash===f});var h=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(e,["scroll","smooth","timeout","elementId"]);return o.createElement(t,i({},p,h,{onClick:function(t){var n;c(),a=e.elementId?"#"+e.elementId:f,e.onClick&&e.onClick(t),""===a||t.defaultPrevented||0!==t.button||e.target&&"_self"!==e.target||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(l=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},n=e.timeout,window.setTimeout((function(){!1===d()&&(null===s&&(s=new MutationObserver(d)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),u=window.setTimeout((function(){c()}),n||1e4))}),0))},ref:n}),e.children)}))}var h=p(r.N_);p(r.k2)},7864:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=a(n(5043)),i=a(n(1380));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"render",value:function(){return r.default.createElement("button",this.props,this.props.children)}}]),e}(r.default.Component);e.default=(0,i.default)(s)},3318:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=u(n(5043)),a=u(n(4182)),s=u(n(5173));function u(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){var t=this,e=o({},this.props);return delete e.name,e.parentBindings&&delete e.parentBindings,i.default.createElement("div",o({},e,{ref:function(e){t.props.parentBindings.domNode=e}}),this.props.children)}}]),e}(i.default.Component);l.propTypes={name:s.default.string,id:s.default.string},e.default=(0,a.default)(l)},1556:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(5043)),r=i(n(1380));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var s=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=r=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},a(r,n)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(o.default.Component);e.default=(0,r.default)(s)},9473:(t,e,n)=>{"use strict";e.Nk=void 0;var o=p(n(1556)),r=p(n(7864)),i=p(n(3318)),a=p(n(9080)),s=p(n(9529)),u=p(n(2040)),l=p(n(3177)),c=p(n(1380)),f=p(n(4182)),d=p(n(6789));function p(t){return t&&t.__esModule?t:{default:t}}o.default,r.default,i.default,a.default,s.default,u.default,e.Nk=l.default,c.default,f.default,d.default,o.default,r.default,i.default,a.default,s.default,u.default,l.default,c.default,f.default,d.default},6789:(t,e,n)=>{"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(5043),l=(n(7950),n(2401),n(2040)),c=n(9080),f=n(5173),d=n(2296),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number},h={Scroll:function(t,e){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=e||c,f=function(e){function c(t){i(this,c);var e=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,t));return h.call(e),e.state={active:!1},e}return s(c,e),r(c,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();l.isMounted(t)||l.mount(t,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,t)),this.props.spy&&l.addStateHandler(this.stateHandler),l.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){l.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=e,n.onClick=this.handleClick,u.createElement(t,n)}}]),c}(u.Component),h=function(){var t=this;this.scrollTo=function(e,r){n.scrollTo(e,o({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.stateHandler=function(){n.getActiveLink()!==t.props.to&&(null!==t.state&&t.state.active&&t.props.onSetInactive&&t.props.onSetInactive(),t.setState({active:!1}))},this.spyHandler=function(e){var o=t.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var r=t.props.to,i=null,a=0,s=0,u=0;if(o.getBoundingClientRect)u=o.getBoundingClientRect().top;if(!i||t.props.isDynamic){if(!(i=n.get(r)))return;var c=i.getBoundingClientRect();s=(a=c.top-u+e)+c.height}var f=e-t.props.offset,p=f>=Math.floor(a)&&f<Math.floor(s),h=f<Math.floor(a)||f>=Math.floor(s),y=n.getActiveLink();return h?(r===y&&n.setActiveLink(void 0),t.props.hashSpy&&d.getHash()===r&&d.changeHash(),t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive()),l.updateStates()):p&&y!==r?(n.setActiveLink(r),t.props.hashSpy&&d.changeHash(r),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(r)),l.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var e=function(e){function n(t){i(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return s(n,e),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(t){c.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return u.createElement(t,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(u.Component);return e.propTypes={name:f.string,id:f.string},e}};t.exports=h},3177:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=(s(n(2401)),s(n(6580))),i=s(n(3996)),a=s(n(9529));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(t){return r.default[t.smooth]||r.default.defaultEasing},l=function(){if("undefined"!==typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(t,e,n){window.setTimeout(t,n||1e3/60,(new Date).getTime())},c=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollLeft;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},d=function t(e,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var i=t.bind(null,e,n);l.call(window,i)}else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPosition);else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPositionY)},p=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},h=function(t,e,n,o){e.data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(e.data.delayTimeout);if(i.default.subscribe((function(){e.data.cancel=!0})),p(e),e.data.start=null,e.data.cancel=!1,e.data.startPosition=e.horizontal?c(e):f(e),e.data.targetPosition=e.absolute?t:t+e.data.startPosition,e.data.startPosition!==e.data.targetPosition){var r;e.data.delta=Math.round(e.data.targetPosition-e.data.startPosition),e.data.duration=("function"===typeof(r=e.duration)?r:function(){return r})(e.data.delta),e.data.duration=isNaN(parseFloat(e.data.duration))?1e3:parseFloat(e.data.duration),e.data.to=n,e.data.target=o;var s=u(e),h=d.bind(null,s,e);e&&e.delay>0?e.data.delayTimeout=window.setTimeout((function(){a.default.registered.begin&&a.default.registered.begin(e.data.to,e.data.target),l.call(window,h)}),e.delay):(a.default.registered.begin&&a.default.registered.begin(e.data.to,e.data.target),l.call(window,h))}else a.default.registered.end&&a.default.registered.end(e.data.to,e.data.target,e.data.currentPosition)},y=function(t){return(t=o({},t)).data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},t.absolute=!0,t};e.default={animateTopScroll:h,getAnimationType:u,scrollToTop:function(t){h(0,y(t))},scrollToBottom:function(t){t=y(t),p(t),h(t.horizontal?function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollWidth-e.offsetWidth;var n=document.body,o=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)}(t):function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(t),t)},scrollTo:function(t,e){h(t,y(e))},scrollMore:function(t,e){e=y(e),p(e);var n=e.horizontal?c(e):f(e);h(t+n,e)}}},3996:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1836),r=["mousedown","mousewheel","touchmove","keydown"];e.default={subscribe:function(t){return"undefined"!==typeof document&&r.forEach((function(e){return(0,o.addPassiveEventListener)(document,e,t)}))}}},1836:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.addPassiveEventListener=function(t,e,o){var r=o.name;r||(r=e,console.warn("Listener must be a named function.")),n.has(e)||n.set(e,new Set);var i=n.get(e);if(!i.has(r)){var a=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}();t.addEventListener(e,o,!!a&&{passive:!0}),i.add(r)}},e.removePassiveEventListener=function(t,e,o){t.removeEventListener(e,o),n.get(e).delete(o.name||e)};var n=new Map},4182:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=u(n(5043)),a=(u(n(7950)),u(n(9080))),s=u(n(5173));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),r(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;a.default.unregister(this.props.name)}},{key:"registerElems",value:function(t){a.default.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return i.default.createElement(t,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(i.default.Component);return e.propTypes={name:s.default.string,id:s.default.string},e}},9529:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(t,e){n.registered[t]=e},remove:function(t){n.registered[t]=null}}};e.default=n},2296:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(1836);var o,r=n(2401),i=(o=r)&&o.__esModule?o:{default:o};var a={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,e){this.containers[t]=e},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,e=this.getHash();e?window.setTimeout((function(){t.scrollTo(e,!0),t.initialized=!0}),10):this.initialized=!0},scrollTo:function(t,e){var n=this.scroller;if(n.get(t)&&(e||t!==n.getActiveLink())){var o=this.containers[t]||document;n.scrollTo(t,{container:o})}},getHash:function(){return i.default.getHash()},changeHash:function(t,e){this.isInitialized()&&i.default.getHash()!==t&&i.default.updateHash(t,e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};e.default=a},1380:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=c(n(5043)),a=c(n(2040)),s=c(n(9080)),u=c(n(5173)),l=c(n(2296));function c(t){return t&&t.__esModule?t:{default:t}}var f={to:u.default.string.isRequired,containerId:u.default.string,container:u.default.object,activeClass:u.default.string,activeStyle:u.default.object,spy:u.default.bool,horizontal:u.default.bool,smooth:u.default.oneOfType([u.default.bool,u.default.string]),offset:u.default.number,delay:u.default.number,isDynamic:u.default.bool,onClick:u.default.func,duration:u.default.oneOfType([u.default.number,u.default.func]),absolute:u.default.bool,onSetActive:u.default.func,onSetInactive:u.default.func,ignoreCancelEvents:u.default.bool,hashSpy:u.default.bool,saveHashHistory:u.default.bool,spyThrottle:u.default.number};e.default=function(t,e){var n=e||s.default,u=function(e){function s(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return c.call(e),e.state={active:!1},e}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,e),r(s,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t&&!e?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();a.default.isMounted(t)||a.default.mount(t,this.props.spyThrottle),this.props.hashSpy&&(l.default.isMounted()||l.default.mount(n),l.default.mapContainer(this.props.to,t)),a.default.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){a.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n={};n=this.state&&this.state.active?o({},this.props.style,this.props.activeStyle):o({},this.props.style);var r=o({},this.props);for(var a in f)r.hasOwnProperty(a)&&delete r[a];return r.className=e,r.style=n,r.onClick=this.handleClick,i.default.createElement(t,r)}}]),s}(i.default.PureComponent),c=function(){var t=this;this.scrollTo=function(e,r){n.scrollTo(e,o({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.spyHandler=function(e,o){var r=t.getScrollSpyContainer();if(!l.default.isMounted()||l.default.isInitialized()){var i=t.props.horizontal,a=t.props.to,s=null,u=void 0,c=void 0;if(i){var f=0,d=0,p=0;if(r.getBoundingClientRect)p=r.getBoundingClientRect().left;if(!s||t.props.isDynamic){if(!(s=n.get(a)))return;var h=s.getBoundingClientRect();d=(f=h.left-p+e)+h.width}var y=e-t.props.offset;u=y>=Math.floor(f)&&y<Math.floor(d),c=y<Math.floor(f)||y>=Math.floor(d)}else{var v=0,m=0,g=0;if(r.getBoundingClientRect)g=r.getBoundingClientRect().top;if(!s||t.props.isDynamic){if(!(s=n.get(a)))return;var b=s.getBoundingClientRect();m=(v=b.top-g+o)+b.height}var w=o-t.props.offset;u=w>=Math.floor(v)&&w<Math.floor(m),c=w<Math.floor(v)||w>=Math.floor(m)}var O=n.getActiveLink();if(c){if(a===O&&n.setActiveLink(void 0),t.props.hashSpy&&l.default.getHash()===a){var S=t.props.saveHashHistory,_=void 0!==S&&S;l.default.changeHash("",_)}t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive(a,s))}if(u&&(O!==a||!1===t.state.active)){n.setActiveLink(a);var P=t.props.saveHashHistory,T=void 0!==P&&P;t.props.hashSpy&&l.default.changeHash(a,T),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(a,s))}}}};return u.propTypes=f,u.defaultProps={offset:0},u}},2040:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(381),i=(o=r)&&o.__esModule?o:{default:o},a=n(1836);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,e){if(t){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,i.default)(t,e)}((function(e){s.scrollHandler(t)}),e);s.scrollSpyContainers.push(t),(0,a.addPassiveEventListener)(t,"scroll",n)}},isMounted:function(t){return-1!==s.scrollSpyContainers.indexOf(t)},currentPositionX:function(t){if(t===document){var e=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return t.scrollLeft},currentPositionY:function(t){if(t===document){var e=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return t.scrollTop},scrollHandler:function(t){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)].spyCallbacks||[]).forEach((function(e){return e(s.currentPositionX(t),s.currentPositionY(t))}))},addStateHandler:function(t){s.spySetState.push(t)},addSpyHandler:function(t,e){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(t),t(s.currentPositionX(e),s.currentPositionY(e))},updateStates:function(){s.spySetState.forEach((function(t){return t()}))},unmount:function(t,e){s.scrollSpyContainers.forEach((function(t){return t.spyCallbacks&&t.spyCallbacks.length&&t.spyCallbacks.indexOf(e)>-1&&t.spyCallbacks.splice(t.spyCallbacks.indexOf(e),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.indexOf(t)>-1&&s.spySetState.splice(s.spySetState.indexOf(t),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(t){return s.scrollHandler(t)}))}};e.default=s},9080:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=s(n(2401)),i=s(n(3177)),a=s(n(9529));function s(t){return t&&t.__esModule?t:{default:t}}var u={},l=void 0;e.default={unmount:function(){u={}},register:function(t,e){u[t]=e},unregister:function(t){delete u[t]},get:function(t){return u[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return l=t},getActiveLink:function(){return l},scrollTo:function(t,e){var n=this.get(t);if(n){var s=(e=o({},e,{absolute:!1})).containerId,u=e.container,l=void 0;l=s?document.getElementById(s):u&&u.nodeType?u:document,e.absolute=!0;var c=e.horizontal,f=r.default.scrollOffset(l,n,c)+(e.offset||0);if(!e.smooth)return a.default.registered.begin&&a.default.registered.begin(t,n),l===document?e.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):l.scrollTop=f,void(a.default.registered.end&&a.default.registered.end(t,n));i.default.animateTopScroll(f,e,t,n)}else console.warn("target Element not found")}}},6580:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={defaultEasing:function(t){return t<.5?Math.pow(2*t,2)/2:1-Math.pow(2*(1-t),2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},2401:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){for(var n=t.offsetTop,o=t.offsetParent;o&&!e(o);)n+=o.offsetTop,o=o.offsetParent;return{offsetTop:n,offsetParent:o}};e.default={updateHash:function(t,e){var n=0===t.indexOf("#")?t.substring(1):t,o=n?"#"+n:"",r=window&&window.location,i=o?r.pathname+r.search+o:r.pathname+r.search;e?history.pushState(history.state,"",i):history.replaceState(history.state,"",i)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(t){return function(e){return t.contains?t!=e&&t.contains(e):!!(16&t.compareDocumentPosition(e))}},scrollOffset:function(t,e,o){if(o)return t===document?e.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(t).position?e.offsetLeft:e.offsetLeft-t.offsetLeft;if(t===document)return e.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(t).position){if(e.offsetParent!==t){var r=n(e,(function(e){return e===t||e===document})),i=r.offsetTop;if(r.offsetParent!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return i}return e.offsetTop}if(e.offsetParent===t.offsetParent)return e.offsetTop-t.offsetTop;var a=function(t){return t===document};return n(e,a).offsetTop-n(t,a).offsetTop}}}}]);
//# sourceMappingURL=826.596f98d5.chunk.js.map