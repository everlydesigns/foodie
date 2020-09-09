"use strict";!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var o={exports:{}};t(o.exports),(void 0).bodyScrollLock=o.exports}}(0,(function(e){function t(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var o=!1;if("undefined"!=typeof window){var n={get passive(){o=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),i=[],l=!1,c=-1,d=void 0,u=void 0,a=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},s=function(e){var t=e||window.event;return!!a(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},v=function(){setTimeout((function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)}))};e.disableBodyScroll=function(e,n){if(r){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!i.some((function(t){return t.targetElement===e}))){var v={targetElement:e,options:n||{}};i=[].concat(t(i),[v]),e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-c;!a(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?s(e):e.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",s,o?{passive:!1}:void 0),l=!0)}}else{!function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;t&&o>0&&(u=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}void 0===d&&(d=document.body.style.overflow,setTimeout((function(){document.body.style.overflow="hidden"})))}(n);var f={targetElement:e,options:n||{}};i=[].concat(t(i),[f])}},e.clearAllBodyScrollLocks=function(){r?(i.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",s,o?{passive:!1}:void 0),l=!1),i=[],c=-1):(v(),i=[])},e.enableBodyScroll=function(e){if(r){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,i=i.filter((function(t){return t.targetElement!==e})),l&&0===i.length&&(document.removeEventListener("touchmove",s,o?{passive:!1}:void 0),l=!1)}else(i=i.filter((function(t){return t.targetElement!==e}))).length||v()}}));