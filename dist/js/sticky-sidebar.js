"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}
/**
 * Sticky Sidebar JavaScript Plugin.
 * @version 3.3.4
 * @author Ahmed Bouhuolia <a.bouhuolia@gmail.com>
 * @license The MIT License (MIT)
 */var StickySidebar=function(){var t=".stickySidebar",e={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1};return function(){function i(t){var n=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(_classCallCheck(this,i),this.options=i.extend(e,s),this.sidebar="string"==typeof t?document.querySelector(t):t,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this.dimensions={translateY:0,maxTranslateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach((function(t){n[t]=n[t].bind(n)})),this.initialize()}return _createClass(i,[{key:"initialize",value:function(){var t=this;if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){var e=document.createElement("div");for(e.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(e);this.sidebar.firstChild!=e;)e.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){var i=document.querySelectorAll(this.options.containerSelector);if((i=Array.prototype.slice.call(i)).forEach((function(e,i){e.contains(t.sidebar)&&(t.container=e)})),!i.length)throw new Error("The container does not contains on the sidebar.")}"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}},{key:"bindEvents",value:function(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+t,this),this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}},{key:"handleEvent",value:function(t){this.updateSticky(t)}},{key:"calcDimensions",value:function(){if(!this._breakpoint){var t=this.dimensions;t.containerTop=i.offsetRelative(this.container).top,t.containerHeight=this.container.clientHeight,t.containerBottom=t.containerTop+t.containerHeight,t.sidebarHeight=this.sidebarInner.offsetHeight,t.sidebarWidth=this.sidebarInner.offsetWidth,t.viewportHeight=window.innerHeight,t.maxTranslateY=t.containerHeight-t.sidebarHeight,this._calcDimensionsWithScroll()}}},{key:"_calcDimensionsWithScroll",value:function(){var t=this.dimensions;t.sidebarLeft=i.offsetRelative(this.sidebar).left,t.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,t.viewportBottom=t.viewportTop+t.viewportHeight,t.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,t.topSpacing=this.options.topSpacing,t.bottomSpacing=this.options.bottomSpacing,"function"==typeof t.topSpacing&&(t.topSpacing=parseInt(t.topSpacing(this.sidebar))||0),"function"==typeof t.bottomSpacing&&(t.bottomSpacing=parseInt(t.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?t.topSpacing<t.lastTopSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&t.bottomSpacing<t.lastBottomSpacing&&(t.translateY+=t.lastBottomSpacing-t.bottomSpacing,this._reStyle=!0),t.lastTopSpacing=t.topSpacing,t.lastBottomSpacing=t.bottomSpacing}},{key:"isSidebarFitsViewport",value:function(){var t=this.dimensions,e="down"===this.scrollDirection?t.lastBottomSpacing:t.lastTopSpacing;return this.dimensions.sidebarHeight+e<this.dimensions.viewportHeight}},{key:"observeScrollDir",value:function(){var t=this.dimensions;if(t.lastViewportTop!==t.viewportTop){var e="down"===this.direction?Math.min:Math.max;t.viewportTop===e(t.viewportTop,t.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}},{key:"getAffixType",value:function(){this._calcDimensionsWithScroll();var t=this.dimensions,e=t.viewportTop+t.topSpacing,i=this.affixedType;return e<=t.containerTop||t.containerHeight<=t.sidebarHeight?(t.translateY=0,i="STATIC"):i="up"===this.direction?this._getAffixTypeScrollingUp():this._getAffixTypeScrollingDown(),t.translateY=Math.max(0,t.translateY),t.translateY=Math.min(t.containerHeight,t.translateY),t.translateY=Math.round(t.translateY),t.lastViewportTop=t.viewportTop,i}},{key:"_getAffixTypeScrollingDown",value:function(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,n=t.viewportBottom-t.bottomSpacing,s=this.affixedType;return this.isSidebarFitsViewport()?t.sidebarHeight+i>=t.containerBottom?(t.translateY=t.containerBottom-e,s="CONTAINER-BOTTOM"):i>=t.containerTop&&(t.translateY=i-t.containerTop,s="VIEWPORT-TOP"):t.containerBottom<=n?(t.translateY=t.containerBottom-e,s="CONTAINER-BOTTOM"):e+t.translateY<=n?(t.translateY=n-e,s="VIEWPORT-BOTTOM"):t.containerTop+t.translateY<=i&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(s="VIEWPORT-UNBOTTOM"),s}},{key:"_getAffixTypeScrollingUp",value:function(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,n=t.viewportBottom-t.bottomSpacing,s=this.affixedType;return i<=t.translateY+t.containerTop?(t.translateY=i-t.containerTop,s="VIEWPORT-TOP"):t.containerBottom<=n?(t.translateY=t.containerBottom-e,s="CONTAINER-BOTTOM"):this.isSidebarFitsViewport()||t.containerTop<=i&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(s="VIEWPORT-UNBOTTOM"),s}},{key:"_getStyle",value:function(t){if(void 0!==t){var e={inner:{},outer:{}},n=this.dimensions;switch(t){case"VIEWPORT-TOP":e.inner={position:"fixed",top:n.topSpacing,left:n.sidebarLeft-n.viewportLeft,width:n.sidebarWidth};break;case"VIEWPORT-BOTTOM":e.inner={position:"fixed",top:"auto",left:n.sidebarLeft,bottom:n.bottomSpacing,width:n.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":var s=this._getTranslate(0,n.translateY+"px");e.inner=s?{transform:s}:{position:"absolute",top:n.translateY,width:n.sidebarWidth}}switch(t){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":e.outer={height:n.sidebarHeight,position:"relative"}}return e.outer=i.extend({height:"",position:""},e.outer),e.inner=i.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:""},e.inner),e}}},{key:"stickyPosition",value:function(e){if(!this._breakpoint){e=this._reStyle||e||!1;this.options.topSpacing,this.options.bottomSpacing;var n=this.getAffixType(),s=this._getStyle(n);if((this.affixedType!=n||e)&&n){var o="affix."+n.toLowerCase().replace("viewport-","")+t;for(var r in i.eventTrigger(this.sidebar,o),"STATIC"===n?i.removeClass(this.sidebar,this.options.stickyClass):i.addClass(this.sidebar,this.options.stickyClass),s.outer){var a="number"==typeof s.outer[r]?"px":"";this.sidebar.style[r]=s.outer[r]+a}for(var p in s.inner){var c="number"==typeof s.inner[p]?"px":"";this.sidebarInner.style[p]=s.inner[p]+c}var l="affixed."+n.toLowerCase().replace("viewport-","")+t;i.eventTrigger(this.sidebar,l)}else this._initialized&&(this.sidebarInner.style.left=s.inner.left);this.affixedType=n}}},{key:"_widthBreakpoint",value:function(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),i.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}},{key:"updateSticky",value:function(){var t,e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,t=i.type,requestAnimationFrame((function(){switch(t){case"scroll":e._calcDimensionsWithScroll(),e.observeScrollDir(),e.stickyPosition();break;case"resize":default:e._widthBreakpoint(),e.calcDimensions(),e.stickyPosition(!0)}e._running=!1})))}},{key:"_setSupportFeatures",value:function(){var t=this.support;t.transform=i.supportTransform(),t.transform3d=i.supportTransform(!0)}},{key:"_getTranslate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.support.transform3d?"translate3d("+t+", "+e+", "+i+")":!!this.support.translate&&"translate("+t+", "+e+")"}},{key:"destroy",value:function(){window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+t,this);var e={inner:{},outer:{}};for(var i in e.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},e.outer={height:"",position:""},e.outer)this.sidebar.style[i]=e.outer[i];for(var n in e.inner)this.sidebarInner.style[n]=e.inner[n];this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}}],[{key:"supportTransform",value:function(t){var e=!1,i=t?"perspective":"transform",n=i.charAt(0).toUpperCase()+i.slice(1),s=document.createElement("support").style;return(i+" "+["Webkit","Moz","O","ms"].join(n+" ")+n).split(" ").forEach((function(t,i){if(void 0!==s[t])return e=t,!1})),e}},{key:"eventTrigger",value:function(t,e,i){try{var n=new CustomEvent(e,{detail:i})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i)}t.dispatchEvent(n)}},{key:"extend",value:function(t,e){var i={};for(var n in t)void 0!==e[n]?i[n]=e[n]:i[n]=t[n];return i}},{key:"offsetRelative",value:function(t){var e={left:0,top:0};do{var i=t.offsetTop,n=t.offsetLeft;isNaN(i)||(e.top+=i),isNaN(n)||(e.left+=n),t="BODY"===t.tagName?t.parentElement:t.offsetParent}while(t);return e}},{key:"addClass",value:function(t,e){i.hasClass(t,e)||(t.classList?t.classList.add(e):t.className+=" "+e)}},{key:"removeClass",value:function(t,e){i.hasClass(t,e)&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}},{key:"defaults",get:function(){return e}}]),i}()}();window.StickySidebar=StickySidebar;