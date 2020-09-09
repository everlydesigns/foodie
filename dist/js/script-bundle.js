"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}!function e(t,i,s){function r(n,o){if(!i[n]){if(!t[n]){var u="function"==typeof require&&require;if(!o&&u)return u(n,!0);if(a)return a(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[n]={exports:{}};t[n][0].call(c.exports,(function(e){return r(t[n][1][e]||e)}),c,c.exports,e,t,i,s)}return i[n].exports}for(var a="function"==typeof require&&require,n=0;n<s.length;n++)r(s[n]);return r}({1:[function(e,t,i){!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if(void 0!==i)t(i);else{var s={};t(s),e.bodyScrollLock=s}}(this,(function(e){function t(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var i=!1;if("undefined"!=typeof window){var s={get passive(){i=!0}};window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}function r(e){return u.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))}function a(e){var t=e||window.event;return!!r(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)}function n(){setTimeout((function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==m&&(document.body.style.overflow=m,m=void 0)}))}var o="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),u=[],l=!1,c=-1,m=void 0,d=void 0;e.disableBodyScroll=function(e,s){if(o){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!u.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:s||{}};u=[].concat(t(u),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var i,s,n,o;1===t.targetTouches.length&&(s=e,o=(i=t).targetTouches[0].clientY-c,r(i.target)||(s&&0===s.scrollTop&&0<o||(n=s)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&o<0?a(i):i.stopPropagation()))},l||(document.addEventListener("touchmove",a,i?{passive:!1}:void 0),l=!0)}}else{!function(e){if(void 0===d){var t=!!e&&!0===e.reserveScrollBarGap,i=window.innerWidth-document.documentElement.clientWidth;t&&0<i&&(d=document.body.style.paddingRight,document.body.style.paddingRight=i+"px")}void 0===m&&(m=document.body.style.overflow,setTimeout((function(){document.body.style.overflow="hidden"})))}(s);var p={targetElement:e,options:s||{}};u=[].concat(t(u),[p])}},e.clearAllBodyScrollLocks=function(){o?(u.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",a,i?{passive:!1}:void 0),l=!1),u=[],c=-1):(n(),u=[])},e.enableBodyScroll=function(e){if(o){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,u=u.filter((function(t){return t.targetElement!==e})),l&&0===u.length&&(document.removeEventListener("touchmove",a,i?{passive:!1}:void 0),l=!1)}else(u=u.filter((function(t){return t.targetElement!==e}))).length||n()}}))},{}],2:[function(e,t,i){var s,r,a,n,o,u,l,c,m,d,p,b=e("body-scroll-lock");function g(e,t){if(void 0!==e){var i=document.createElement("article");i.setAttribute("class","post-excerpt"),i.innerHTML=t.innerHTML;var s=i.querySelector(".post-excerpt__thumb-img");return s.setAttribute("src",e.thumb+"-1520.jpg"),s.setAttribute("alt",e.thumbAlt),i.querySelector(".post-excerpt__label").innerText=e.label,i.querySelector(".post-excerpt__headline a").innerText=e.title,i.querySelector(".post-excerpt__excerpt").innerText=e.excerpt,i.querySelector(".post-excerpt__interaction-bar")&&(i.querySelector(".post-excerpt__likes-label").innerText="".concat(e.likes," ").concat(1===e.likes?"like":"likes"),i.querySelector(".post-excerpt__comments-label").innerHTML="".concat(e.comments,' <span class="screen-reader-text">').concat(1===e.comments?"comment":"comments","</span>"),i.querySelector(".post-excerpt__rating .screen-reader-text").innerText="Rating: "+e.rating,i.querySelector(".post-excerpt__rating-stars").setAttribute("class","post-excerpt__rating-stars post-excerpt__rating-stars--"+Math.round(e.rating)),i.querySelector(".post-excerpt__bookmark-btn").classList.remove("checked"),i.querySelector(".post-excerpt__like-btn").classList.remove("checked")),i}}console.log(b),s=document.querySelector(".nav-panel__wrap"),r=!1,a=function(){document.querySelector(".header").classList.toggle("header--opened"),r?(console.log("scroll enabled"),b.enableBodyScroll(s)):(console.log("scroll disabled"),b.disableBodyScroll(s)),r=!r},document.querySelector(".header__menu-toggle").addEventListener("click",(function(){a()})),document.querySelector(".nav-panel").addEventListener("click",(function(e){e.target.classList.contains("nav-panel")&&a()})),document.querySelectorAll(".nav-links__item--checkbox").forEach((function(e){e.addEventListener("click",(function(e){this.querySelector(".nav-links__item-checkbox").classList.toggle("checked")}))})),function(){for(var e=document.forms,t=0;t<e.length;t++)e[t].addEventListener("submit",(function(e){e.preventDefault(),location.reload()}))}(),document.body.classList.contains("is-home")&&(function(){var e=document.querySelector(".post-excerpt"),t=document.querySelector(".main-feed .row"),i=document.querySelector(".main-feed__load-more"),s=document.querySelector(".main-feed__load-more-btn"),r=1,a=0,n=[{type:"large",title:"Delicious & Healthy Soups That Will Totally Fill You Up Anytime",excerpt:"I know what you’re thinking, “Warm soup in July?” but these recipes are unlinke any others. Consectetur adipiscing elit. Donec quis interdum est. Vivamus vitae sapien mollis, sagittis quam eu, port. Euismod nisi porta lorem mollis aliquam. Sed faucibus turpis in eu mi. Convallis a cras semper auctor neque vitae tempus. Euismod quis viverra nibh cras pulvinar mattis nunc sed.",thumb:"dist/img/posts/post-2",thumbAlt:"delicious green soup",label:"quick & easy",likes:109,comments:63,rating:4.89},{type:"medium",title:"Healthy Desserts That Are Full of Almost All Vitamins",excerpt:"So you ate your dinner and now you can enjoy some desert. Ex sed duis duis nulla, o cernantur ea officia, aute probant id fidelissimae est id ea nulla quibusdam quo aut ex fore amet malis est sed illum amet nisi voluptate, senserit noster possumus deserunt de cupidatat summis cernantur. Export nostrud o senserit ea ea noster irure duis iudicem. Cernantur ad anim deserunt.Quo ubi culpa aute aute ut quorum est ad aute proident. Id irure arbitrantur an o ingeniis o excepteur, et elit aute ab consequat quo commodo si cillum. Aute litteris praetermissum.",thumb:"dist/img/posts/post-3",thumbAlt:"bowl of fruit on a blue marble background",label:"sweet-tooth",likes:86,comments:39,rating:3.34},{type:"medium",title:"Budget-Friendly Tacos That Will Fit Anyone’s Busy Day",excerpt:"It doesn’t matter if it’s Tuesday, you can enjoy tacos any day! Venenatis sodales auctor pretium ipsum mollis dui nisl euismod ultrices laoreet lacinia id nunc quam pellentesque per proin rutrum arcu dictum risus luctus Hymenaeos sed rutrum libero. Class aliquam faucibus nibh. Congue class consectetuer. Curae; sollicitudin duis rhoncus integer eget magna commodo vel vulputate. Rhoncus, interdum gravida. Venenatis quisque. Odio tortor.",thumb:"dist/img/posts/post-4",thumbAlt:"delicious veggie tacos on a wooden table",label:"budget meals",likes:79,comments:51,rating:4.21},{type:"large",title:"The Easiest and Most Fun Way to Add Berries and Fruits to Your Diet",excerpt:"If you haven’t heard already, berries are full of amazing nutrients.  Bibendum hendrerit cum accumsan. In eleifend maecenas Non commodo dapibus suscipit dictum ullamcorper, commodo. Taciti purus facilisis maecenas fermentum pede varius nostra, natoque, facilisis tempor. Erat. Odio. Eget phasellus metus inceptos litora turpis. Tincidunt aptent primis nascetur ut mauris consequat purus. Elit litora mauris ad nunc eget. Vel quisque lobortis blandit.",thumb:"dist/img/posts/post-5",thumbAlt:"small bowls of berries and yoghurt on a white cloth",label:"Recipe idea",likes:284,comments:155,rating:4.83},{type:"medium",title:"Easy Guide to Making Your Own Juices From Scratch",excerpt:"The juicing craze is real guys and I’s so happy about that! Mi nec fermentum facilisis nulla et imperdiet posuere senectus purus pharetra convallis amet dis Elit euismod Vivamus hac torquent. Magnis egestas A, habitant aptent urna, hymenaeos orci fermentum. Nam felis libero enim, rutrum habitant scelerisque velit nunc, imperdiet curabitur tristique montes ut, blandit est nonummy curae.",thumb:"dist/img/posts/post-6",thumbAlt:"glasses of grapefruit juice on a rustic wooden table",label:"Back 2 basics",likes:91,comments:29,rating:4.92},{type:"medium",title:"Sweet Recipes That You Can Make From Pure Leftovers",excerpt:"Ask any raccoon, leftovers are amazing. Don’t just throw food away! you can use is in those recipes! At primis praesent facilisis fames donec augue, placerat dictumst ipsum suscipit hendrerit aliquet, faucibus gravida tristique feugiat penatibus mauris mauris quis ultricies enim mollis posuere feugiat suscipit nostra viverra Feugiat lorem eget euismod molestie risus fringilla praesent vestibulum. Malesuada.",thumb:"dist/img/posts/post-7",thumbAlt:"freshly picked apples on wooden cutting board",label:"sweet-tooth",likes:24,comments:5,rating:4.84},{type:"large",title:"Make Unbelievably Tasty Pancakes with Those 5 Healthy Ingredients",excerpt:"Nothing says breakfast like fragrant pancakes in the morning. Quisque conubia imperdiet, risus, praesent eget nonummy ad diam vitae augue ridiculus sociis enim tempus leo mi dis id fringilla dui parturient nam metus. Faucibus commodo. Faucibus risus. Magna nulla dapibus nostra, venenatis fringilla elementum congue felis class posuere neque nam condimentum ac nec Potenti bibendum placerat id taciti. Penatibus tellus fermentum nibh erat mus pretium varius proin mauris risus pede lorem feugiat semper penatibus Nunc. Etiam, nisi per mi pulvinar class bibendum.",thumb:"dist/img/posts/post-8",thumbAlt:"tasty pancakes with walnuts and maple syrup",label:"5 ingredients",likes:63,comments:19,rating:4.43}];function o(s){var n=g(s,e);n.setAttribute("class","post-excerpt post-excerpt--".concat(s.type)),"large"==s.type&&(r++,n.classList.add("post-excerpt--"+(r%2==0?"right":"left")));var o=n.querySelector(".post-excerpt__thumb-img");o.setAttribute("src",s.thumb+"-1520.jpg");var u=["1520 1520w","420@2x 840w","420 420w","320@2x 640w","320 320w","260@2x 520w","260 260w"];u=u.map((function(e){var t=e.split(" ");return"".concat(s.thumb,"-").concat(t[0],".jpg ").concat(t[1])})),o.setAttribute("srcset",u.join(", ")),"medium"==s.type&&o.setAttribute("sizes",o.getAttribute("sizes").substring(27)),t.insertBefore(n,i),a++}for(var u=0;u<3;u++)o(n[u]);s.addEventListener("click",(function(e){this.classList.add("button--loading");var t=document.documentElement.scrollTop;setTimeout((function(){e.target.classList.remove("button--loading");for(var s=a;s<a+3;s++){if(void 0===n[s]){i.classList.add("reached-the-end");break}o(n[s]),document.documentElement.scrollTop=t}}),400+3*Math.random()*200)}))}(),document.querySelector(".main-feed").addEventListener("click",(function(e){if(e.target.classList.contains("post-excerpt__bookmark-btn")&&e.target.classList.toggle("checked"),e.target.classList.contains("post-excerpt__like-btn")&&e.target.classList.toggle("checked"),e.target.classList.contains("post-excerpt__comments-btn")&&(window.location.href="single.html#comments"),e.target.classList.contains("post-excerpt__rating-star")){var t=_toConsumableArray(e.target.parentElement.children).indexOf(e.target)+1;e.target.parentElement.setAttribute("class","post-excerpt__rating-stars post-excerpt__rating-stars--"+t)}}))),document.body.classList.contains("is-single")&&(new Swiper(".post-sidebar__section--user-reviews .carousel",{slidesPerView:"auto",spaceBetween:20,grabCursor:!0,loop:!0,slideClass:"user-review",wrapperClass:"carousel__items",pagination:{el:".carousel__indicators",bulletClass:"carousel__indicator",bulletActiveClass:"carousel__indicator--active",clickable:!0},autoplay:{delay:1e4},breakpoints:{620:{slidesPerView:2}}}),new Swiper(".post-recipe__nutrition-items-wrap",{slidesPerView:"auto",spaceBetween:6,grabCursor:!0,slideClass:"post-recipe__nutrition-item",wrapperClass:"post-recipe__nutrition-items"}),new Swiper(".post-gallery__wrap",{slidesPerView:"auto",spaceBetween:20,grabCursor:!0,slideClass:"post-gallery__item-wrap",wrapperClass:"post-gallery__items"}),n=document.querySelector(".post-sidebar__section--related-recipes"),o=n.querySelector(".post-excerpt__holder"),u=n.querySelector(".carousel__items"),l=o.dataset.postInsert,c=JSON.parse(l),m=[{type:"large",title:"Delicious & Healthy Soups That Will Totally Fill You Up Anytime",excerpt:"I know what you’re thinking, “Warm soup in July?” but these recipes are unlinke any others. Consectetur adipiscing elit. Donec quis interdum est. Vivamus vitae sapien mollis, sagittis quam eu, port. Euismod nisi porta lorem mollis aliquam. Sed faucibus turpis in eu mi. Convallis a cras semper auctor neque vitae tempus. Euismod quis viverra nibh cras pulvinar mattis nunc sed.",thumb:"dist/img/posts/post-2",thumbAlt:"delicious green soup",label:"quick & easy",likes:109,comments:63,rating:4.89},{type:"medium",title:"Healthy Desserts That Are Full of Almost All Vitamins",excerpt:"So you ate your dinner and now you can enjoy some desert. Ex sed duis duis nulla, o cernantur ea officia, aute probant id fidelissimae est id ea nulla quibusdam quo aut ex fore amet malis est sed illum amet nisi voluptate, senserit noster possumus deserunt de cupidatat summis cernantur. Export nostrud o senserit ea ea noster irure duis iudicem. Cernantur ad anim deserunt.Quo ubi culpa aute aute ut quorum est ad aute proident. Id irure arbitrantur an o ingeniis o excepteur, et elit aute ab consequat quo commodo si cillum. Aute litteris praetermissum.",thumb:"dist/img/posts/post-3",thumbAlt:"bowl of fruit on a blue marble background",label:"sweet-tooth",likes:86,comments:39,rating:3.34},{type:"medium",title:"Budget-Friendly Tacos That Will Fit Anyone’s Busy Day",excerpt:"It doesn’t matter if it’s Tuesday, you can enjoy tacos any day! Venenatis sodales auctor pretium ipsum mollis dui nisl euismod ultrices laoreet lacinia id nunc quam pellentesque per proin rutrum arcu dictum risus luctus Hymenaeos sed rutrum libero. Class aliquam faucibus nibh. Congue class consectetuer. Curae; sollicitudin duis rhoncus integer eget magna commodo vel vulputate. Rhoncus, interdum gravida. Venenatis quisque. Odio tortor.",thumb:"dist/img/posts/post-4",thumbAlt:"delicious veggie tacos on a wooden table",label:"budget meals",likes:79,comments:51,rating:4.21},{type:"large",title:"The Easiest and Most Fun Way to Add Berries and Fruits to Your Diet",excerpt:"If you haven’t heard already, berries are full of amazing nutrients.  Bibendum hendrerit cum accumsan. In eleifend maecenas Non commodo dapibus suscipit dictum ullamcorper, commodo. Taciti purus facilisis maecenas fermentum pede varius nostra, natoque, facilisis tempor. Erat. Odio. Eget phasellus metus inceptos litora turpis. Tincidunt aptent primis nascetur ut mauris consequat purus. Elit litora mauris ad nunc eget. Vel quisque lobortis blandit.",thumb:"dist/img/posts/post-5",thumbAlt:"small bowls of berries and yoghurt on a white cloth",label:"Recipe idea",likes:284,comments:155,rating:4.83},{type:"medium",title:"Easy Guide to Making Your Own Juices From Scratch",excerpt:"The juicing craze is real guys and I’s so happy about that! Mi nec fermentum facilisis nulla et imperdiet posuere senectus purus pharetra convallis amet dis Elit euismod Vivamus hac torquent. Magnis egestas A, habitant aptent urna, hymenaeos orci fermentum. Nam felis libero enim, rutrum habitant scelerisque velit nunc, imperdiet curabitur tristique montes ut, blandit est nonummy curae.",thumb:"dist/img/posts/post-6",thumbAlt:"glasses of grapefruit juice on a rustic wooden table",label:"Back 2 basics",likes:91,comments:29,rating:4.92},{type:"medium",title:"Sweet Recipes That You Can Make From Pure Leftovers",excerpt:"Ask any raccoon, leftovers are amazing. Don’t just throw food away! you can use is in those recipes! At primis praesent facilisis fames donec augue, placerat dictumst ipsum suscipit hendrerit aliquet, faucibus gravida tristique feugiat penatibus mauris mauris quis ultricies enim mollis posuere feugiat suscipit nostra viverra Feugiat lorem eget euismod molestie risus fringilla praesent vestibulum. Malesuada.",thumb:"dist/img/posts/post-7",thumbAlt:"freshly picked apples on wooden cutting board",label:"sweet-tooth",likes:24,comments:5,rating:4.84},{type:"large",title:"Make Unbelievably Tasty Pancakes with Those 5 Healthy Ingredients",excerpt:"Nothing says breakfast like fragrant pancakes in the morning. Quisque conubia imperdiet, risus, praesent eget nonummy ad diam vitae augue ridiculus sociis enim tempus leo mi dis id fringilla dui parturient nam metus. Faucibus commodo. Faucibus risus. Magna nulla dapibus nostra, venenatis fringilla elementum congue felis class posuere neque nam condimentum ac nec Potenti bibendum placerat id taciti. Penatibus tellus fermentum nibh erat mus pretium varius proin mauris risus pede lorem feugiat semper penatibus Nunc. Etiam, nisi per mi pulvinar class bibendum.",thumb:"dist/img/posts/post-8",thumbAlt:"tasty pancakes with walnuts and maple syrup",label:"5 ingredients",likes:63,comments:19,rating:4.43}],d=n.querySelector(".post-excerpt"),p=[],c.forEach((function(e,t){var i=e.id;if(void 0!==i){var s=g(m[i],d);p.push(s)}})),o.remove(),u.append.apply(u,p),new Swiper(".carousel--related-posts",{slidesPerView:"auto",spaceBetween:10,grabCursor:!0,loop:!0,slideClass:"post-excerpt",wrapperClass:"carousel__items",autoplay:{delay:15e3},breakpoints:{620:{slidesPerView:2,spaceBetween:20}}}))},{"body-scroll-lock":1}]},{},[2]);