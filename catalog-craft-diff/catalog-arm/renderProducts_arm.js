function render() {
	productsPage_arm.render();	
}

spinnerPage_arm.render();

let CATALOG_ARM = [];
render();


fetch('http://decona.ru/wp-content/uploads/catalog-craft-diff/catalog-arm/products_arm.json')
    .then(res => res.json())
    .then(body => {
		CATALOG_ARM = body;

		setTimeout(() => {
			spinnerPage_arm.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage_arm.handleClear();
    	errorPage_arm.render();
    })