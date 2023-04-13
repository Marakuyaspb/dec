class Spinner_pouf {
    handleClear() {
        ROOT_SPINNER_POUF.innerHTML = '';
    }

    render() {
        const html_s_pouf = `
        	<div class="spinner-container">
        		<img class="spinner__img" src="http://decona.ru/wp-content/uploads/2023/03/spinner.svg" />
        	</div>`;
        ROOT_SPINNER_POUF.innerHTML = html_s_pouf;
    }
}

const spinnerPage_pouf = new Spinner_pouf();