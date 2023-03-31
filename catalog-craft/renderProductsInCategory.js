function renderProductsInCategory(){

/* GIVE ID info about the category */
	const clickedElement = event.currentTarget;
  	const currentCategory = clickedElement.id;
  	console.log('Id is: ' + currentCategory);

/* CLEAR the page */
  	var listOfCategories = document.getElementById('goods_categories');
  	listOfCategories.remove();

/* RENDER IT! */


/* SPINNER */
	class Spinner {
	    handleClear() {
	        ROOT_SPINNER.innerHTML = '';
	    }

	    render() {
	        const html = `
	        	<div class="spinner-container">
	        		<img class="spinner__img" src="http://decona.ru/wp-content/uploads/2023/03/spinner.svg" />
	        	</div>`;
	        ROOT_SPINNER.innerHTML = html;
	    }
	}

	const spinnerPage = new Spinner();


/* ERROR */
	class Error {
	    render() {
	        const html = `
	        	<div class="container">
	                <div class="error-message">
	                    <h3>Технические работы</h3>
	                   
	                    <p>Извините за неудобства. Скоро всё обновим!</p>
	                </div>
	        	</div>
	        `;

	        ROOT_ERROR.innerHTML = html;
	    }
	}

	const errorPage = new Error();



/* PUSH PRODUCTS */

	class Products {

		render() {
			let htmlProducts = '';
			
			CATALOG.forEach(({sku, collection, model, fabric_type, fabric_name, product_name, product_img, product_img_mob, is_new,available_in_showroom, available_for_delivery_2,available_for_delivery_28, prod_width, prod_depth, prod_height, price, price_sale}) => {
				
				htmlProducts += `
				
				<div class = "product_card sku m-2" id='${sku}' onClick='showDetails(event);'>
					<div class = 'd-flex justify-content-between'>
						<h3>${product_name}</h3>
					<div>
						<img class = 'available_icon' src='${is_new}'>
						<img class = 'available_icon' src='${available_in_showroom}'> 
						<img class = 'available_icon'src='${available_for_delivery_2}'>
						</div>
					</div>
					<center>
						<img src="${product_img}" class="img-fluid">
					</center>
					<div class = 'd-flex justify-content-between'>
						<div class='cacao'>В наличии</div>
						<div class='general-gray old-price'>${price} ₽</div>
					</div>
					<div class = 'd-flex justify-content-between'>
						
						<div class='cacao'>${prod_width}×${prod_depth}×${prod_height}</div>
						<div class='cacao'>${price_sale} ₽</div>
					</div>
				</div>
				`;
				});

				const html = `
				<div class='thin ms-5'><a href='http://decona.ru'>Главная</a> / <a href='http://decona.ru/products/'>Продукция</a> / <a href='http://decona.ru/category-var-content/'>Категория</a>
						</div>
				<h4 class=ms-5 my-4>Прямые диваны</h4>
				<div class = "products_container" id='products_container'>
					
						${htmlProducts}
					
				</div>
			`;
			ROOT_PRODUCTS.innerHTML = html;
			}
		}

	const productsPage = new Products(); 



	/* RENDER PRODS */
		function render() {
			productsPage.render();	
		}

		spinnerPage.render();

		let CATALOG = [];
		render();


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

}