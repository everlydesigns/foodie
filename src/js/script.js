/*==========================================================================*/
/* Home
/*==========================================================================*/

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
