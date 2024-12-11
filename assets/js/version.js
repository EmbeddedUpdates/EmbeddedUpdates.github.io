/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(document).ready(function() {
	fetch('https://embeddedupdates.github.io/version.html')
		.then(response => response.text())
		.then(text => {
			// Do something with the text
			console.log(text);
			$( "#versionNumber" ).text(text);
		})
	.catch(error => console.error('Error:', error));
});