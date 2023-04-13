function render() {
	productsPage_pouf.render();	
}

spinnerPage_pouf.render();

let CATALOG_POUF = [];
render();


fetch('http://decona.ru/wp-content/uploads/catalog-craft-diff/catalog-pouf/products_pouf.json')
    .then(res => res.json())
    .then(body => {
		CATALOG_POUF = body;

		setTimeout(() => {
			spinnerPage_pouf.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage_pouf.handleClear();
    	errorPage_pouf.render();
    })