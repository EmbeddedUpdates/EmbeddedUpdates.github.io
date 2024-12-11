/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(document).ready(function() {
	$("#subscribeButton").click(function() {
		// Code to execute when the button is clicked

		fetch("https://formspree.io/f/xpwzejdz", {
			method: "POST",
			body: JSON.stringify({
				email: $("#newSubscriberEmail").attr('value'),
				message: "Fix my bugs",
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		  .then((response) => response.json())
		  .then((json) => console.log(json));
		  
		console.log("Button clicked!");
		$("#subscribeButton").attr('value', 'Done!');
	});
});