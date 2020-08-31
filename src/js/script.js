/*==========================================================================*/
/* Home
/*==========================================================================*/


/* Insert post excerpts (DRY)
/*--------------------------------------------------------------------------*/
function insertPosts() {
	const postExcerptBase = document.querySelector('.post-excerpt');
	const postFeed = document.querySelector('.main-feed .row');
	const loadMoreBtn = document.querySelector('.main-feed__load-more');
	let largePostsCount = 1;

	const posts = [
		{
			type: "large",
			title: "Delicious & Healthy Soups That Will Totally Fill You Up Anytime",
			excerpt: "I know what you’re thinking, “Warm soup in July?” but these recipes are unlinke any others. Consectetur adipiscing elit. Donec quis interdum est. Vivamus vitae sapien mollis, sagittis quam eu, port",
			thumb: 'dist/img/posts/post-1-380.jpeg',
			thumbAlt: 'delicious green soup',
			label: 'quick & easy',
			likes: 109,
			comments: 63,
			rating: 4.89
		},
		{
			type: "medium",
			title: "Healthy Desserts That Are Full of Almost All Vitamins",
			excerpt: "So you ate your dinner and now you can enjoy some desert. Consectetur adipiscing elit vitae sapien mollis, sagittis quam eu.",
			thumb: 'dist/img/posts/post-1-380.jpeg',
			thumbAlt: 'bowl of fruit on a blue marble background',
			label: 'sweet-tooth',
			likes: 86,
			comments: 39,
			rating: 4.34
		}
	];

	posts.forEach((post, i) => {
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

		// TODO: Rating

		// append to the feed
		postFeed.insertBefore(newPostExcerpt, loadMoreBtn);
	});


} insertPosts();


/* Initialize header and nav functionality
/*--------------------------------------------------------------------------*/
function headerNavInit() {
	// click event for menu toggle
	document.querySelector('.header__menu-toggle').addEventListener('click', () => {
		document.querySelector('.header').classList.toggle('header--opened');
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

/* Make interaction items clickable
/*--------------------------------------------------------------------------*/
document.querySelector('.main-feed').addEventListener('click', (e) => {

	// bookmark button
	if ( e.target.classList.contains('post-excerpt__bookmark-btn') ) {
		e.target.classList.toggle('checked');
	}

	// likes button
	if ( e.target.classList.contains('post-excerpt__like-btn') ) {
		e.target.classList.toggle('checked');
	}
})
