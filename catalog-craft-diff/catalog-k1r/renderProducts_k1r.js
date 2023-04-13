function render() {
	productsPage_k1r.render();	
}

spinnerPage_k1r.render();

let CATALOG_K1R = [];
render();


fetch('http://decona.ru/wp-content/uploads/catalog-craft-diff/catalog-k1r/products_k1r.json')
    .then(res => res.json())
    .then(body => {
		CATALOG_K1R = body;

		setTimeout(() => {
			spinnerPage_k1r.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage_k1r.handleClear();
    	errorPage_k1r.render();
    })