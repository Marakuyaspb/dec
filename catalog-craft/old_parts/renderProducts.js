function render() {
	productsPage.render();	
}

spinnerPage.render();

let CATALOG = [];
render(category);


fetch('http://decona.ru/wp-content/uploads/catalog/products.json')
    .then(res => res.json())
    .then(body => {
		CATALOG = body;

		setTimeout(() => {
			spinnerPage.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage.handleClear();
    	errorPage.render();
    })