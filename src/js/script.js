/*==========================================================================*/
/* Global Scripts
/*==========================================================================*/

/* Initialize header and nav functionality
/*--------------------------------------------------------------------------*/
function headerNavInit() {

	function disableScroll() {
		window.scrollTo(0, 0);
		// console.log('hi');
	}
	const toggleScroll = () => {
		document.body.classList.toggle('nav-opened');
	}

	// toggle navigation panel
	const toggleMenu = () => {
		const headerEl = document.querySelector('.header');

		// toggle button class
		headerEl.classList.toggle('header--opened');

		// toggle scrolling ability
		toggleScroll();
	}
	// click event for menu toggle
	document.querySelector('.header__menu-toggle').addEventListener('click', () => {
		toggleMenu();
	});

	document.querySelector('.nav-panel').addEventListener('click', function(e) {
		if ( e.target.classList.contains('nav-panel') ) {
			toggleMenu();
		}
	});

	// click event for navigation checkboxes
	document.querySelectorAll('.nav-links__item--checkbox').forEach((checkboxItem) => {
		checkboxItem.addEventListener('click', function(e) {
			this.querySelector('.nav-links__item-checkbox').classList.toggle('checked');
		})
	});
} headerNavInit();

/* Search bar submit
/*--------------------------------------------------------------------------*/
function searchBarInit() {

	// handle all search forms
	let searchForms = document.forms;
	for (let i = 0; i < searchForms.length; i++) {
		searchForms[i].addEventListener('submit', e => {
			e.preventDefault();

			location.reload();
		})
	}
} searchBarInit();


/* Get posts
/*--------------------------------------------------------------------------*/
function getPosts() {
	const posts = [
		{
			type: "large",
			title: "Delicious & Healthy Soups That Will Totally Fill You Up Anytime",
			excerpt: "I know what you’re thinking, “Warm soup in July?” but these recipes are unlinke any others. Consectetur adipiscing elit. Donec quis interdum est. Vivamus vitae sapien mollis, sagittis quam eu, port. Euismod nisi porta lorem mollis aliquam. Sed faucibus turpis in eu mi. Convallis a cras semper auctor neque vitae tempus. Euismod quis viverra nibh cras pulvinar mattis nunc sed.",
			thumb: 'dist/img/posts/post-2',
			thumbAlt: 'delicious green soup',
			label: 'quick & easy',
			likes: 109,
			comments: 63,
			rating: 4.89
		},

		{
			type: "medium",
			title: "Healthy Desserts That Are Full of Almost All Vitamins",
			excerpt: "So you ate your dinner and now you can enjoy some desert. Ex sed duis duis nulla, o cernantur ea officia, aute probant id fidelissimae est id ea nulla quibusdam quo aut ex fore amet malis est sed illum amet nisi voluptate, senserit noster possumus deserunt de cupidatat summis cernantur. Export nostrud o senserit ea ea noster irure duis iudicem. Cernantur ad anim deserunt.Quo ubi culpa aute aute ut quorum est ad aute proident. Id irure arbitrantur an o ingeniis o excepteur, et elit aute ab consequat quo commodo si cillum. Aute litteris praetermissum.",
			thumb: 'dist/img/posts/post-3',
			thumbAlt: 'bowl of fruit on a blue marble background',
			label: 'sweet-tooth',
			likes: 86,
			comments: 39,
			rating: 3.34
		},
		{
			type: "medium",
			title: "Budget-Friendly Tacos That Will Fit Anyone’s Busy Day",
			excerpt: "It doesn’t matter if it’s Tuesday, you can enjoy tacos any day! Venenatis sodales auctor pretium ipsum mollis dui nisl euismod ultrices laoreet lacinia id nunc quam pellentesque per proin rutrum arcu dictum risus luctus Hymenaeos sed rutrum libero. Class aliquam faucibus nibh. Congue class consectetuer. Curae; sollicitudin duis rhoncus integer eget magna commodo vel vulputate. Rhoncus, interdum gravida. Venenatis quisque. Odio tortor.",
			thumb: 'dist/img/posts/post-4',
			thumbAlt: 'delicious veggie tacos on a wooden table',
			label: 'budget meals',
			likes: 79,
			comments: 51,
			rating: 4.21
		},

		{
			type: "large",
			title: "The Easiest and Most Fun Way to Add Berries and Fruits to Your Diet",
			excerpt: "If you haven’t heard already, berries are full of amazing nutrients.  Bibendum hendrerit cum accumsan. In eleifend maecenas Non commodo dapibus suscipit dictum ullamcorper, commodo. Taciti purus facilisis maecenas fermentum pede varius nostra, natoque, facilisis tempor. Erat. Odio. Eget phasellus metus inceptos litora turpis. Tincidunt aptent primis nascetur ut mauris consequat purus. Elit litora mauris ad nunc eget. Vel quisque lobortis blandit.",
			thumb: 'dist/img/posts/post-5',
			thumbAlt: 'small bowls of berries and yoghurt on a white cloth',
			label: 'Recipe idea',
			likes: 284,
			comments: 155,
			rating: 4.83
		},

		{
			type: "medium",
			title: "Easy Guide to Making Your Own Juices From Scratch",
			excerpt: "The juicing craze is real guys and I’s so happy about that! Mi nec fermentum facilisis nulla et imperdiet posuere senectus purus pharetra convallis amet dis Elit euismod Vivamus hac torquent. Magnis egestas A, habitant aptent urna, hymenaeos orci fermentum. Nam felis libero enim, rutrum habitant scelerisque velit nunc, imperdiet curabitur tristique montes ut, blandit est nonummy curae.",
			thumb: 'dist/img/posts/post-6',
			thumbAlt: 'glasses of grapefruit juice on a rustic wooden table',
			label: 'Back 2 basics',
			likes: 91,
			comments: 29,
			rating: 4.92
		},
		{
			type: "medium",
			title: "Sweet Recipes That You Can Make From Pure Leftovers",
			excerpt: "Ask any raccoon, leftovers are amazing. Don’t just throw food away! you can use is in those recipes! At primis praesent facilisis fames donec augue, placerat dictumst ipsum suscipit hendrerit aliquet, faucibus gravida tristique feugiat penatibus mauris mauris quis ultricies enim mollis posuere feugiat suscipit nostra viverra Feugiat lorem eget euismod molestie risus fringilla praesent vestibulum. Malesuada.",
			thumb: 'dist/img/posts/post-7',
			thumbAlt: 'freshly picked apples on wooden cutting board',
			label: 'sweet-tooth',
			likes: 24,
			comments: 5,
			rating: 4.84
		},

		{
			type: "large",
			title: "Make Unbelievably Tasty Pancakes with Those 5 Healthy Ingredients",
			excerpt: "Nothing says breakfast like fragrant pancakes in the morning. Quisque conubia imperdiet, risus, praesent eget nonummy ad diam vitae augue ridiculus sociis enim tempus leo mi dis id fringilla dui parturient nam metus. Faucibus commodo. Faucibus risus. Magna nulla dapibus nostra, venenatis fringilla elementum congue felis class posuere neque nam condimentum ac nec Potenti bibendum placerat id taciti. Penatibus tellus fermentum nibh erat mus pretium varius proin mauris risus pede lorem feugiat semper penatibus Nunc. Etiam, nisi per mi pulvinar class bibendum.",
			thumb: 'dist/img/posts/post-8',
			thumbAlt: 'tasty pancakes with walnuts and maple syrup',
			label: '5 ingredients',
			likes: 63,
			comments: 19,
			rating: 4.43
		},
	];

	return posts;
}

/* Create post excerpt element
/*--------------------------------------------------------------------------*/
function createPostExcerptEl(post, postExcerptBase) {
	if ( typeof post == 'undefined' ) return;

	const newPostExcerpt = document.createElement('article');
	newPostExcerpt.setAttribute('class', 'post-excerpt');

	// insert base html
	newPostExcerpt.innerHTML = postExcerptBase.innerHTML;

	// insert alt tag
	const postThumbImg = newPostExcerpt.querySelector('.post-excerpt__thumb-img');
	postThumbImg.setAttribute('src', post.thumb + '-1520.jpg');
	postThumbImg.setAttribute('alt', post.thumbAlt);

	// update post body
	newPostExcerpt.querySelector('.post-excerpt__label').innerText = post.label;
	newPostExcerpt.querySelector('.post-excerpt__headline a').innerText = post.title;
	newPostExcerpt.querySelector('.post-excerpt__excerpt').innerText = post.excerpt;

	// update interaction
	if ( !!newPostExcerpt.querySelector('.post-excerpt__interaction-bar')  ) {
		newPostExcerpt.querySelector('.post-excerpt__likes-label').innerText = `${post.likes} ${( post.likes === 1 ? 'like' : 'likes' )}`;
		newPostExcerpt.querySelector('.post-excerpt__comments-label').innerHTML = `${post.comments} <span class="screen-reader-text">${( post.comments === 1 ? 'comment' : 'comments' )}</span>`;

		// rating
		newPostExcerpt.querySelector('.post-excerpt__rating .screen-reader-text').innerText = "Rating: "+ post.rating;
		newPostExcerpt.querySelector('.post-excerpt__rating-stars').setAttribute('class', 'post-excerpt__rating-stars post-excerpt__rating-stars--'+ Math.round(post.rating));
	}

	// return semi-assembled element
	return newPostExcerpt;
}

/*==========================================================================*/
/* Home Scripts
/*==========================================================================*/
function homeScriptsInit() {
	if ( !document.body.classList.contains('is-home') ) return;
	mainFeedPostsInit();
	postExptInit();
} homeScriptsInit();

/* Initialize main feed
/*--------------------------------------------------------------------------*/
function mainFeedPostsInit() {
	const postExcerptBase = document.querySelector('.post-excerpt');
	const postFeed = document.querySelector('.main-feed .row');
	const loadMoreWrap = document.querySelector('.main-feed__load-more');
	const loadMoreBtn = document.querySelector('.main-feed__load-more-btn');
	let largePostsCount = 1;
	let insertedPosts = 0;

	// get posts
	const posts = getPosts();

	// given post object inserts said post to the feed
	function insertPost(post) {
		const newPostExcerpt = createPostExcerptEl(post, postExcerptBase);
		newPostExcerpt.setAttribute('class', `post-excerpt post-excerpt--${post.type}`);

		// determine post position if large type
		if ( post.type == 'large' ) {
			largePostsCount++;
			newPostExcerpt.classList.add('post-excerpt--' + ( largePostsCount % 2 === 0 ? 'right' : 'left' ));
		}

		// insert src & responsive images
		const postThumbImg = newPostExcerpt.querySelector('.post-excerpt__thumb-img')
		postThumbImg.setAttribute('src', post.thumb + '-1520.jpg');
		let postSrcSetArray = [
			'1520 1520w',
			'420@2x 840w',
			'420 420w',
			'320@2x 640w',
			'320 320w',
			'260@2x 520w',
			'260 260w',
		];
		postSrcSetArray = postSrcSetArray.map(srcset => {
			let srcArray = srcset.split(' ');
			return `${post.thumb}-${srcArray[0]}.jpg ${srcArray[1]}`;
		});
		postThumbImg.setAttribute('srcset', postSrcSetArray.join(', '));

		// remove last query for medium posts
		if ( post.type == 'medium' ) {
			postThumbImg.setAttribute('sizes', postThumbImg.getAttribute('sizes').substring(27));
		}

		// append to the feed
		postFeed.insertBefore(newPostExcerpt, loadMoreWrap);
		insertedPosts++;
	}

	// insert 3 posts at first
	for (let i = 0; i < 3; i++) {
		insertPost(posts[i]);
	}

	// event for loading more posts
	loadMoreBtn.addEventListener('click', function(e) {
		this.classList.add('button--loading');

		// save scroll position after click
		let scrollPositionBefore = document.documentElement.scrollTop;

		// simulate loading time for demo
		setTimeout(function () {
			e.target.classList.remove('button--loading');

			// insert 3 posts per 'page'
			for (let i = insertedPosts; i < insertedPosts + 3; i++) {
				if ( typeof posts[i] !== 'undefined' ) insertPost(posts[i]);
				else {
					loadMoreWrap.classList.add('reached-the-end');
					break;
				}

				// return to previous scroll position
				document.documentElement.scrollTop = scrollPositionBefore;
			}
		}, 400 + (Math.random() * 3 * 200));
	})
}

/* Posts excerpt interaction init
/*--------------------------------------------------------------------------*/
function postExptInit() {

	// Make bookmark & likes button clickable
	document.querySelector('.main-feed').addEventListener('click', (e) => {

		// bookmark button
		if ( e.target.classList.contains('post-excerpt__bookmark-btn') ) {
			e.target.classList.toggle('checked');
		}

		// likes button
		if ( e.target.classList.contains('post-excerpt__like-btn') ) {
			e.target.classList.toggle('checked');
		}
		// rating functionality
		if ( e.target.classList.contains('post-excerpt__rating-star') ) {
			let setRating = [...e.target.parentElement.children].indexOf(e.target) + 1;

			e.target.parentElement.setAttribute('class', 'post-excerpt__rating-stars post-excerpt__rating-stars--'+ setRating);
		}
	})

}


/*==========================================================================*/
/* Single scripts
/*==========================================================================*/
function singleScriptsInit() {
	if ( !document.body.classList.contains('is-single') ) return;

	// intialize single scripts
	reviewSliderInit();
	nutritionInfoInit();
	postGalleryInit();
	relatedPostsInit();

} singleScriptsInit();

/* Review Section Slider
/*--------------------------------------------------------------------------*/
function reviewSliderInit() {
	// Initialize swiper.js
	const reviewSlider = new Swiper('.post-sidebar__section--user-reviews .carousel', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		grabCursor: true,
		slideClass: 'user-review',
		wrapperClass: 'carousel__items',
		pagination: {
			el: '.carousel__indicators',
			bulletClass: 'carousel__indicator',
			bulletActiveClass: 'carousel__indicator--active',
			clickable: true
		},
	});
}

/* Nutrition Information Slider
/*--------------------------------------------------------------------------*/
function nutritionInfoInit() {
	// Initialize swiper.js
	const nutritionSlider = new Swiper('.post-recipe__nutrition-items-wrap', {
		slidesPerView: 'auto',
		spaceBetween: 6,
		grabCursor: true,
		slideClass: 'post-recipe__nutrition-item',
		wrapperClass: 'post-recipe__nutrition-items'
	});
}

/* Post Gallery
/*--------------------------------------------------------------------------*/
function postGalleryInit() {
	// Initialize swiper.js
	const postGallerySlider = new Swiper('.post-gallery__wrap', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		grabCursor: true,
		slideClass: 'post-gallery__item-wrap',
		wrapperClass: 'post-gallery__items'
	});
}

/* Related Posts section
/*--------------------------------------------------------------------------*/
function relatedPostsInit() {
	const relatedRecipesSection = document.querySelector('.post-sidebar__section--related-recipes');
	const postsHolder = relatedRecipesSection.querySelector('.post-excerpt__holder');
	const postsWrap = relatedRecipesSection.querySelector('.carousel__items');

	// get post data
	const postInsertDataAttr = postsHolder.dataset.postInsert;
	const postInsertData = JSON.parse(postInsertDataAttr);

	// create elements from posts obj
	const posts = getPosts();
	const basePost = relatedRecipesSection.querySelector('.post-excerpt');
	const postsToInsert = [];

	postInsertData.forEach((insertData, i) => {
		let postInsertId = insertData.id;
		if ( typeof postInsertId == 'undefined' ) return;

		const newPostExcerpt = createPostExcerptEl(posts[postInsertId], basePost);

		// add to array to insert later
		postsToInsert.push(newPostExcerpt);
	});

	// insert posts to DOM
	postsHolder.remove();
	postsWrap.append(...postsToInsert);

	// intialize swiper.js
	const postGallerySlider = new Swiper('.carousel', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		grabCursor: true,
		slideClass: 'post-excerpt',
		wrapperClass: 'carousel__items'
	});
}
