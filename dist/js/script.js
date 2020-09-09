"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function headerNavInit(){var e=function(){document.querySelector(".header").classList.toggle("header--opened"),document.body.classList.toggle("nav-opened")};document.querySelector(".header__menu-toggle").addEventListener("click",(function(){e()})),document.querySelector(".nav-panel").addEventListener("click",(function(t){t.target.classList.contains("nav-panel")&&e()})),document.querySelectorAll(".nav-links__item--checkbox").forEach((function(e){e.addEventListener("click",(function(e){this.querySelector(".nav-links__item-checkbox").classList.toggle("checked")}))}))}function searchBarInit(){for(var e=document.forms,t=0;t<e.length;t++)e[t].addEventListener("submit",(function(e){e.preventDefault(),location.reload()}))}function getPosts(){return[{type:"large",title:"Delicious & Healthy Soups That Will Totally Fill You Up Anytime",excerpt:"I know what you’re thinking, “Warm soup in July?” but these recipes are unlinke any others. Consectetur adipiscing elit. Donec quis interdum est. Vivamus vitae sapien mollis, sagittis quam eu, port. Euismod nisi porta lorem mollis aliquam. Sed faucibus turpis in eu mi. Convallis a cras semper auctor neque vitae tempus. Euismod quis viverra nibh cras pulvinar mattis nunc sed.",thumb:"dist/img/posts/post-2",thumbAlt:"delicious green soup",label:"quick & easy",likes:109,comments:63,rating:4.89},{type:"medium",title:"Healthy Desserts That Are Full of Almost All Vitamins",excerpt:"So you ate your dinner and now you can enjoy some desert. Ex sed duis duis nulla, o cernantur ea officia, aute probant id fidelissimae est id ea nulla quibusdam quo aut ex fore amet malis est sed illum amet nisi voluptate, senserit noster possumus deserunt de cupidatat summis cernantur. Export nostrud o senserit ea ea noster irure duis iudicem. Cernantur ad anim deserunt.Quo ubi culpa aute aute ut quorum est ad aute proident. Id irure arbitrantur an o ingeniis o excepteur, et elit aute ab consequat quo commodo si cillum. Aute litteris praetermissum.",thumb:"dist/img/posts/post-3",thumbAlt:"bowl of fruit on a blue marble background",label:"sweet-tooth",likes:86,comments:39,rating:3.34},{type:"medium",title:"Budget-Friendly Tacos That Will Fit Anyone’s Busy Day",excerpt:"It doesn’t matter if it’s Tuesday, you can enjoy tacos any day! Venenatis sodales auctor pretium ipsum mollis dui nisl euismod ultrices laoreet lacinia id nunc quam pellentesque per proin rutrum arcu dictum risus luctus Hymenaeos sed rutrum libero. Class aliquam faucibus nibh. Congue class consectetuer. Curae; sollicitudin duis rhoncus integer eget magna commodo vel vulputate. Rhoncus, interdum gravida. Venenatis quisque. Odio tortor.",thumb:"dist/img/posts/post-4",thumbAlt:"delicious veggie tacos on a wooden table",label:"budget meals",likes:79,comments:51,rating:4.21},{type:"large",title:"The Easiest and Most Fun Way to Add Berries and Fruits to Your Diet",excerpt:"If you haven’t heard already, berries are full of amazing nutrients.  Bibendum hendrerit cum accumsan. In eleifend maecenas Non commodo dapibus suscipit dictum ullamcorper, commodo. Taciti purus facilisis maecenas fermentum pede varius nostra, natoque, facilisis tempor. Erat. Odio. Eget phasellus metus inceptos litora turpis. Tincidunt aptent primis nascetur ut mauris consequat purus. Elit litora mauris ad nunc eget. Vel quisque lobortis blandit.",thumb:"dist/img/posts/post-5",thumbAlt:"small bowls of berries and yoghurt on a white cloth",label:"Recipe idea",likes:284,comments:155,rating:4.83},{type:"medium",title:"Easy Guide to Making Your Own Juices From Scratch",excerpt:"The juicing craze is real guys and I’s so happy about that! Mi nec fermentum facilisis nulla et imperdiet posuere senectus purus pharetra convallis amet dis Elit euismod Vivamus hac torquent. Magnis egestas A, habitant aptent urna, hymenaeos orci fermentum. Nam felis libero enim, rutrum habitant scelerisque velit nunc, imperdiet curabitur tristique montes ut, blandit est nonummy curae.",thumb:"dist/img/posts/post-6",thumbAlt:"glasses of grapefruit juice on a rustic wooden table",label:"Back 2 basics",likes:91,comments:29,rating:4.92},{type:"medium",title:"Sweet Recipes That You Can Make From Pure Leftovers",excerpt:"Ask any raccoon, leftovers are amazing. Don’t just throw food away! you can use is in those recipes! At primis praesent facilisis fames donec augue, placerat dictumst ipsum suscipit hendrerit aliquet, faucibus gravida tristique feugiat penatibus mauris mauris quis ultricies enim mollis posuere feugiat suscipit nostra viverra Feugiat lorem eget euismod molestie risus fringilla praesent vestibulum. Malesuada.",thumb:"dist/img/posts/post-7",thumbAlt:"freshly picked apples on wooden cutting board",label:"sweet-tooth",likes:24,comments:5,rating:4.84},{type:"large",title:"Make Unbelievably Tasty Pancakes with Those 5 Healthy Ingredients",excerpt:"Nothing says breakfast like fragrant pancakes in the morning. Quisque conubia imperdiet, risus, praesent eget nonummy ad diam vitae augue ridiculus sociis enim tempus leo mi dis id fringilla dui parturient nam metus. Faucibus commodo. Faucibus risus. Magna nulla dapibus nostra, venenatis fringilla elementum congue felis class posuere neque nam condimentum ac nec Potenti bibendum placerat id taciti. Penatibus tellus fermentum nibh erat mus pretium varius proin mauris risus pede lorem feugiat semper penatibus Nunc. Etiam, nisi per mi pulvinar class bibendum.",thumb:"dist/img/posts/post-8",thumbAlt:"tasty pancakes with walnuts and maple syrup",label:"5 ingredients",likes:63,comments:19,rating:4.43}]}function createPostExcerptEl(e,t){if(void 0!==e){var r=document.createElement("article");r.setAttribute("class","post-excerpt"),r.innerHTML=t.innerHTML;var i=r.querySelector(".post-excerpt__thumb-img");return i.setAttribute("src",e.thumb+"-1520.jpg"),i.setAttribute("alt",e.thumbAlt),r.querySelector(".post-excerpt__label").innerText=e.label,r.querySelector(".post-excerpt__headline a").innerText=e.title,r.querySelector(".post-excerpt__excerpt").innerText=e.excerpt,r.querySelector(".post-excerpt__interaction-bar")&&(r.querySelector(".post-excerpt__likes-label").innerText="".concat(e.likes," ").concat(1===e.likes?"like":"likes"),r.querySelector(".post-excerpt__comments-label").innerHTML="".concat(e.comments,' <span class="screen-reader-text">').concat(1===e.comments?"comment":"comments","</span>"),r.querySelector(".post-excerpt__rating .screen-reader-text").innerText="Rating: "+e.rating,r.querySelector(".post-excerpt__rating-stars").setAttribute("class","post-excerpt__rating-stars post-excerpt__rating-stars--"+Math.round(e.rating)),r.querySelector(".post-excerpt__bookmark-btn").classList.remove("checked"),r.querySelector(".post-excerpt__like-btn").classList.remove("checked")),r}}function homeScriptsInit(){document.body.classList.contains("is-home")&&(mainFeedPostsInit(),postExptInit())}function mainFeedPostsInit(){var e=document.querySelector(".post-excerpt"),t=document.querySelector(".main-feed .row"),r=document.querySelector(".main-feed__load-more"),i=document.querySelector(".main-feed__load-more-btn"),s=1,a=0,n=getPosts();function o(i){var n=createPostExcerptEl(i,e);n.setAttribute("class","post-excerpt post-excerpt--".concat(i.type)),"large"==i.type&&(s++,n.classList.add("post-excerpt--"+(s%2==0?"right":"left")));var o=n.querySelector(".post-excerpt__thumb-img");o.setAttribute("src",i.thumb+"-1520.jpg");var u=["1520 1520w","420@2x 840w","420 420w","320@2x 640w","320 320w","260@2x 520w","260 260w"];u=u.map((function(e){var t=e.split(" ");return"".concat(i.thumb,"-").concat(t[0],".jpg ").concat(t[1])})),o.setAttribute("srcset",u.join(", ")),"medium"==i.type&&o.setAttribute("sizes",o.getAttribute("sizes").substring(27)),t.insertBefore(n,r),a++}for(var u=0;u<3;u++)o(n[u]);i.addEventListener("click",(function(e){this.classList.add("button--loading");var t=document.documentElement.scrollTop;setTimeout((function(){e.target.classList.remove("button--loading");for(var i=a;i<a+3;i++){if(void 0===n[i]){r.classList.add("reached-the-end");break}o(n[i]),document.documentElement.scrollTop=t}}),400+3*Math.random()*200)}))}function postExptInit(){document.querySelector(".main-feed").addEventListener("click",(function(e){if(e.target.classList.contains("post-excerpt__bookmark-btn")&&e.target.classList.toggle("checked"),e.target.classList.contains("post-excerpt__like-btn")&&e.target.classList.toggle("checked"),e.target.classList.contains("post-excerpt__comments-btn")&&(window.location.href="single.html#comments"),e.target.classList.contains("post-excerpt__rating-star")){var t=_toConsumableArray(e.target.parentElement.children).indexOf(e.target)+1;e.target.parentElement.setAttribute("class","post-excerpt__rating-stars post-excerpt__rating-stars--"+t)}}))}function singleScriptsInit(){document.body.classList.contains("is-single")&&(reviewSliderInit(),nutritionInfoInit(),postGalleryInit(),relatedPostsInit())}function reviewSliderInit(){new Swiper(".post-sidebar__section--user-reviews .carousel",{slidesPerView:"auto",spaceBetween:20,grabCursor:!0,loop:!0,slideClass:"user-review",wrapperClass:"carousel__items",pagination:{el:".carousel__indicators",bulletClass:"carousel__indicator",bulletActiveClass:"carousel__indicator--active",clickable:!0},autoplay:{delay:1e4},breakpoints:{620:{slidesPerView:2}}})}function nutritionInfoInit(){new Swiper(".post-recipe__nutrition-items-wrap",{slidesPerView:"auto",spaceBetween:6,grabCursor:!0,slideClass:"post-recipe__nutrition-item",wrapperClass:"post-recipe__nutrition-items"})}function postGalleryInit(){new Swiper(".post-gallery__wrap",{slidesPerView:"auto",spaceBetween:20,grabCursor:!0,slideClass:"post-gallery__item-wrap",wrapperClass:"post-gallery__items"})}function relatedPostsInit(){var e=document.querySelector(".post-sidebar__section--related-recipes"),t=e.querySelector(".post-excerpt__holder"),r=e.querySelector(".carousel__items"),i=t.dataset.postInsert,s=JSON.parse(i),a=getPosts(),n=e.querySelector(".post-excerpt"),o=[];s.forEach((function(e,t){var r=e.id;if(void 0!==r){var i=createPostExcerptEl(a[r],n);o.push(i)}})),t.remove(),r.append.apply(r,o);new Swiper(".carousel--related-posts",{slidesPerView:"auto",spaceBetween:10,grabCursor:!0,loop:!0,slideClass:"post-excerpt",wrapperClass:"carousel__items",autoplay:{delay:15e3},breakpoints:{620:{slidesPerView:2,spaceBetween:20}}})}headerNavInit(),searchBarInit(),homeScriptsInit(),singleScriptsInit();