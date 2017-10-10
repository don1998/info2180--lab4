window.onload=myFunction;

function myFunction() {
	document.getElementById("boundary1").addEventListener("mouseover", function() {
		document.getElementById("boundary1").classList.add("youlose");
	});
}