const countValue = document.querySelector('.counter p');
const updateButton = document.querySelector('.counter button');

let value = 0;
countValue.innerHTML = value;

updateButton.addEventListener('click', e => {
	// update the value in the model
	value++;

	// update the view to reflect the model
	countValue.innerHTML = value;
});
