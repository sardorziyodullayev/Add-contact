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
		let elLastItem = document.createElement("li");
		let elKinshipItem = document.createElement("li");
		let elNumItem = document.createElement("li");

		elItem.className = "list-group-item active mb-1";
		elLastItem.className = "list-group-item active mb-1";
		elKinshipItem.className = "list-group-item active mb-1";
		elNumItem.className = "list-group-item active mb-1";

		elItem.textContent = "Ismi:" + " " + array[i].name;
		elLastItem.textContent = "Familiyasi:" + " " + array[i].lastName;
		elKinshipItem.textContent = "Kim bo'lishi:" + " " + array[i].kinship;
		elNumItem.textContent = "Telefon raqami:" + " " + array[i].phoneNumber;

		elSiteList.appendChild(elItem);
		elSiteList.appendChild(elLastItem);
		elSiteList.appendChild(elKinshipItem);
		elSiteList.appendChild(elNumItem);
	}
});
