'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(buttonClick);
}

function buttonClick(e) {
	console.log("button clicked");
	e.preventDefault();
	ga("send", "event", "like", "click");
}