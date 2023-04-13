class Spinner_k1r {
    handleClear() {
        ROOT_SPINNER_K1R.innerHTML = '';
    }

    render() {
        const html_s_k1r = `
        	<div class="spinner-container">
        		<img class="spinner__img" src="http://decona.ru/wp-content/uploads/2023/03/spinner.svg" />
        	</div>`;
        ROOT_SPINNER_K1R.innerHTML = html_s_k1r;
    }
}

const spinnerPage_k1r = new Spinner_k1r();