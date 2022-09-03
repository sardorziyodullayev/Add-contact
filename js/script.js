let elSiteForm = document.querySelector(".site-form");
let elNameInput = document.querySelector(".name-input");
let elLastNameInput = document.querySelector(".last-input");
let elKinshipInput = document.querySelector(".kinship-input");
let elNumberInput = document.querySelector(".num-input");
let elSiteList = document.querySelector(".list");

elSiteForm.addEventListener("submit", function (evt) {
	evt.preventDefault();

	let array = [];

	array.push({
		name: elNameInput.value,
		lastName: elLastNameInput.value,
		kinship: elKinshipInput.value,
		phoneNumber: elNumberInput.value,
	});

	for (let i = 0; i < array.length; i++) {
		let elItem = document.createElement("li");

		elItem.className = "list-group-item active mb-1";

		elItem.textContent =
			array[i].name +
			" " +
			array[i].lastName +
			" " +
			"Kim bo'lishi:" +
			" " +
			array[i].kinship +
			" " +
			"Raqami:" +
			" " +
			array[i].phoneNumber;

		elSiteList.appendChild(elItem);
	}

	let local = localStorage.setItem("kontaktlar", JSON.stringify(array));
});
