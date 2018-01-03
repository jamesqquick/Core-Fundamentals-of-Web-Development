const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const addLinkPanel = document.querySelector("#addLinkPanel");


let linkCategories = [];
let links = [];

addBtn.addEventListener('click', (event) => {
	console.log("Add btn clicked");
	showFormPanel();
});

cancelButton.addEventListener('click', (event) => {
	event.preventDefault();
	console.log("Cancel button clicked");

	hideFormPanel();

});

function showFormPanel() {
	addLinkPanel.classList.remove('hidden');
}

function hideFormPanel() {
	addLinkPanel.classList.add('hidden');
}

linkCategory.addEventListener('keydown', function (event) {

	if (event.keyCode === 188) {
		event.preventDefault();

		linkCategories.push(linkCategory.value);

		linkCategory.value = '';

		//Display the updated categories
		displayLinkCategories();
	}
})

function displayLinkCategories() {
	console.log("Displaying Link Categories");
}


submitButton.addEventListener('click', (event) => {

	//Stop form from submitting
	event.preventDefault();

	const title = linkTitle.value;
	const url = linkUrl.value;
	const categories = linkCategories;

	const newLink = {
		title,
		url,
		categories
	}

	//push new link to array
	links.push(newLink);

	linkTitle.value = '';
	linkUrl.value = '';
	linkCategory.value = '';
	linkCategories = [];

	displayLinkCategories();

	//hide the addLinkPanel form
	hideFormPanel();

});