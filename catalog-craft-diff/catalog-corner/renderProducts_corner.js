function render() {
	productsPage_corner.render();	
}

spinnerPage_corner.render();

let CATALOG_CORNER = [];
render();


fetch('http://decona.ru/wp-content/uploads/catalog-craft-diff/catalog-corner/products_corner.json')
    .then(res => res.json())
    .then(body => {
		CATALOG_CORNER = body;

		setTimeout(() => {
			spinnerPage_corner.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage_corner.handleClear();
    	errorPage_corner.render();
    })