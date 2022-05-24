const endpoint = 'https://api.adviceslip.com/advice';
const button = document.querySelector('#btn-getquote');

const id = document.querySelector('#advice-id');
const quote = document.querySelector('#advice-text');

button.addEventListener('click', () => {
	getQuote();
	button.disabled = true;
	setTimeout(() => {
		button.disabled = false;
	}, 2000);
});

function getQuote() {
	fetch(endpoint, { cache: 'no-store' })
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((data) => {
			id.innerText = data.slip.id;
			quote.innerText = `"${data.slip.advice}"`;
		});
}

getQuote();
