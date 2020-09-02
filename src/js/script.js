/*==========================================================================*/
/* Home
/*==========================================================================*/


/* Initialize main feed
/*--------------------------------------------------------------------------*/
function mainFeedPostsInit() {
	const postExcerptBase = document.querySelector('.post-excerpt');
	const postFeed = document.querySelector('.main-feed .row');
	const loadMoreWrap = document.querySelector('.main-feed__load-more');
	const loadMoreBtn = document.querySelector('.main-feed__load-more-btn');
	let largePostsCount = 1;
	let insertedPosts = 0;

	// all posts
	const posts = [
		{
			type: "large",
			title: "Delicious & Healthy Soups That Will Totally Fill You Up Anytime",
			excerpt: "I know what you’re thinking, “Warm soup in July?” but these recipes are unlinke any others. Consectetur adipiscing elit. Donec quis interdum est. Vivamus vitae sapien mollis, sagittis quam eu, port. Euismod nisi porta lorem mollis aliquam. Sed faucibus turpis in eu mi. Convallis a cras semper auctor neque vitae tempus. Euismod quis viverra nibh cras pulvinar mattis nunc sed.",
			thumb: 'dist/img/posts/post-2-380.jpg',
			thumbAlt: 'delicious green soup',
			label: 'quick & easy',
			likes: 109,
			comments: 63,
			rating: 4.89
		},

		{
			type: "medium",
			title: "Healthy Desserts That Are Full of Almost All Vitamins",
			excerpt: "So you ate your dinner and now you can enjoy some desert. Consectetur adipiscing elit vitae sapien mollis, sagittis quam eu. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Vivamus at augue eget arcu dictum varius duis at consectetur. Quam viverra orci sagittis eu. Eu volutpat odio facilisis mauris sit amet massa. Sem et tortor consequat id porta nibh venenatis cras. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.",
			thumb: 'dist/img/posts/post-1-380.jpeg',
			thumbAlt: 'bowl of fruit on a blue marble background',
			label: 'sweet-tooth',
			likes: 86,
			comments: 39,
			rating: 3.34
		},
		{
			type: "medium",
			title: "Budget-Friendly Tacos That Will Fit Anyone’s Busy Day",
			excerpt: "So you ate your dinner and now you can enjoy some desert. Consectetur adipiscing elit vitae sapien mollis, sagittis quam eu. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Sed risus pretium quam vulputate. At urna condimentum mattis pellentesque. Tortor pretium viverra suspendisse potenti.",
			thumb: 'dist/img/posts/post-1-380.jpeg',
			thumbAlt: 'bowl of fruit on a blue marble background',
			label: 'sweet-tooth',
			likes: 79,
			comments: 51,
			rating: 4.21
		},

		{
			type: "large",
			title: "The Easiest and Most Fun Way to Add Berries and Fruits to Your Diet",
			excerpt: "So you ate your dinner and now you can enjoy some desert. Consectetur adipiscing elit vitae sapien mollis, sagittis quam eu. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Sed risus pretium quam vulputate. At urna condimentum mattis pellentesque. Tortor pretium viverra suspendisse potenti.",
			thumb: 'dist/img/posts/post-1-380.jpeg',
			thumbAlt: 'bowl of fruit on a blue marble background',
			label: 'sweet-tooth',
			likes: 79,
			comments: 51,
			rating: 4.21
		},

		{
			type: "medium",
			title: "Easy Guide to Making Your Own Juices From Scratch",
			excerpt: "So you ate your dinner and now you can enjoy some desert. Consectetur adipiscing elit vitae sapien mollis, sagittis quam eu. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Vivamus at augue eget arcu dictum varius duis at consectetur. Quam viverra orci sagittis eu. Eu volutpat odio facilisis mauris sit amet massa. Sem et tortor consequat id porta nibh venenatis cras. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.",
			thumb: 'dist/img/posts/post-1-380.jpeg',
			thumbAlt: 'bowl of fruit on a blue marble background',
			label: 'sweet-tooth',
			likes: 86,
			comments: 39,
			rating: 3.34
		},
		{
			type: "medium",
			title: "Sweet Recipes That You Can Make From Pure Leftovers",
			excerpt: "So you ate your dinner and now you can enjoy some desert. Consectetur adipiscing elit vitae sapien mollis, sagittis quam eu. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Sed risus pretium quam vulputate. At urna condimentum mattis pellentesque. Tortor pretium viverra suspendisse potenti.",
			thumb: 'dist/img/posts/post-1-380.jpeg',
			thumbAlt: 'bowl of fruit on a blue marble background',
			label: 'sweet-tooth',
			likes: 79,
			comments: 51,
			rating: 4.21
		},
		
		{
			type: "large",
			title: "Make Unbelievably Tasty Pancakes with Those 5 Healthy Ingredients",
			excerpt: "So you ate your dinner and now you can enjoy some desert. Consectetur adipiscing elit vitae sapien mollis, sagittis quam eu. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Sed risus pretium quam vulputate. At urna condimentum mattis pellentesque. Tortor pretium viverra suspendisse potenti.",
			thumb: 'dist/img/posts/post-1-380.jpeg',
			thumbAlt: 'bowl of fruit on a blue marble background',
			label: 'sweet-tooth',
			likes: 79,
			comments: 51,
			rating: 4.21
		},
	];

	// given post object inserts said post to the feed
	function insertPost(post) {
		const newPostExcerpt = document.createElement('article');
		newPostExcerpt.setAttribute('class', `post-excerpt post-excerpt--${post.type}`);

		// determine post position if large type
		if ( post.type == 'large' ) {
			largePostsCount++;
			newPostExcerpt.classList.add('post-excerpt--' + ( largePostsCount % 2 === 0 ? 'right' : 'left' ));
		}

		// insert base html
		newPostExcerpt.innerHTML = postExcerptBase.innerHTML;

		// insert src & alt attrs to the thumb
		const postThumbImg = newPostExcerpt.querySelector('.post-excerpt__thumb-img')
		postThumbImg.setAttribute('src', post.thumb);
		postThumbImg.setAttribute('alt', post.thumbAlt);

		// update post body
		newPostExcerpt.querySelector('.post-excerpt__label').innerText = post.label;
		newPostExcerpt.querySelector('.post-excerpt__headline').innerText = post.title;
		newPostExcerpt.querySelector('.post-excerpt__excerpt').innerText = post.excerpt;

		// update interaction
		newPostExcerpt.querySelector('.post-excerpt__likes-label').innerText = `${post.likes} ${( post.likes === 1 ? 'like' : 'likes' )}`;
		newPostExcerpt.querySelector('.post-excerpt__comments-label').innerHTML = `${post.comments} <span class="screen-reader-text">${( post.comments === 1 ? 'comment' : 'comments' )}</span>`;

		// rating
		newPostExcerpt.querySelector('.post-excerpt__rating .screen-reader-text').innerText = "Rating: "+ post.rating;
		newPostExcerpt.querySelector('.post-excerpt__rating-stars').setAttribute('class', 'post-excerpt__rating-stars post-excerpt__rating-stars--'+ Math.round(post.rating));

		// append to the feed
		postFeed.insertBefore(newPostExcerpt, loadMoreWrap);
		insertedPosts++;
	}

	// insert 3 posts at first
	for (let i = 0; i < 3; i++) {
		insertPost(posts[i]);
	}

	loadMoreBtn.addEventListener('click', function(e) {
		this.classList.add('button--loading');

		setTimeout(function () {
			e.target.classList.remove('button--loading');

			// insert 3 posts per 'page'
			for (let i = insertedPosts; i < insertedPosts + 3; i++) {
				if ( typeof posts[i] !== 'undefined' ) insertPost(posts[i]);
				else {
					loadMoreWrap.classList.add('reached-the-end');
					break;
				}
			}
		}, 400 + (Math.random() * 3 * 200));
	})
} mainFeedPostsInit();


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

} postExptInit();

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

		// enable or disable scroll depending on the menu state
		/*if ( headerEl.classList.contains('header--opened') ) {
			window.addEventListener('scroll', disableScroll);
		} else {
			window.removeEventListener('scroll', disableScroll);
		}*/
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
