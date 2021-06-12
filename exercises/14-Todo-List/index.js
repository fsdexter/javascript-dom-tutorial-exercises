// Your code here
let campo = document.getElementById("addToDo");
console.log(campo);
campo.addEventListener("keydown", event => {
	// keypress = enter
	if (event.key === "Enter") {
		let lista = document.querySelector("ul");

		let deberNuevo = document.createElement("li");
		deberNuevo.innerHTML = `<span><i class="fa fa-trash"></i></span> ${campo.value}`;

		let button = deberNuevo.firstChild.firstChild;
		button.addEventListener("click", () => {
			lista.removeChild(deberNuevo);
		});

		lista.appendChild(deberNuevo);

		campo.value = "";
	}
});

let list = document.querySelector("ul");
let trash = document.querySelectorAll(".fa-trash");
trash.forEach(item => {
	item.addEventListener("click", () => {
		list.removeChild(item.parentNode.parentNode);
	});
});