const textField = document.querySelector('.counter p');
const bumpButton = document.querySelector('.counter button');

let value = 0;
textField.innerHTML = value;

// event listener
bumpButton.addEventListener('click', () => {
	// update the value in the model
	value++;

	// update the view to reflect the model
	textField.innerHTML = value;
});
