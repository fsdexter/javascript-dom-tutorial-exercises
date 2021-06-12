let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let element = document.createElement("li");
	element.innerHTML = "Fourth Element";
	document.querySelector("#myList").appendChild(element);
});
