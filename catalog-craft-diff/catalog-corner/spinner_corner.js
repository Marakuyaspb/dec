class Spinner_corner {
    handleClear() {
        ROOT_SPINNER_CORNER.innerHTML = '';
    }

    render() {
        const html_s_corn = `
        	<div class="spinner-container">
        		<img class="spinner__img" src="http://decona.ru/wp-content/uploads/2023/03/spinner.svg" />
        	</div>`;
        ROOT_SPINNER_CORNER.innerHTML = html_s_corn;
    }
}

const spinnerPage_corner = new Spinner_corner();