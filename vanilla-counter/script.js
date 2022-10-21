const textField = document.querySelector('.counter p');
const bumpButton = document.querySelector('.counter button');

let count = 0;
textField.innerHTML = count;

// event listener
bumpButton.addEventListener('click', () => {
	// update the value in the model
	count++;

	// update the view to reflect the model
	textField.innerHTML = count;
});
