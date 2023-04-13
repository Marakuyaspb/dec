class Spinner_arm {
    handleClear() {
        ROOT_SPINNER_ARM.innerHTML = '';
    }

    render() {
        const html_s_arm = `
        	<div class="spinner-container">
        		<img class="spinner__img" src="http://decona.ru/wp-content/uploads/2023/03/spinner.svg" />
        	</div>`;
        ROOT_SPINNER_ARM.innerHTML = html_s_arm;
    }
}

const spinnerPage_arm = new Spinner_arm();