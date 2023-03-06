/* PRODUCTS */


class Products {

	render() {
		let htmlProducts = '';
		
		CATALOG.forEach(({product_name, product_img, is_new,available_in_showroom, available_for_delivery, prod_width, prod_depth, prod_height, price, price_sale}) => {
			console.log('aaaa!');

			htmlProducts += `
			
			<div class = "product_card m-3" onClick='showDetails()'>
				<div class = 'd-flex justify-content-between'>
					<h3>${product_name}</h3>
					<div>
					<img class = 'available_icon' src='${is_new}'>
					<img class = 'available_icon' src='${available_in_showroom}'> 
					<img class = 'available_icon'src='${available_for_delivery}'>
					</div>
				</div>
				<center>
					<img src="${product_img}" class="img-fluid">
				</center>
				<div class = 'd-flex justify-content-between'>
					<div class='cacao major-text'>В наличии</div>
					<div class='general-gray'>${price} ₽</div>
				</div>
				<div class = 'd-flex justify-content-between'>
					
					<div class='cacao major-text'>${prod_width}×${prod_depth}×${prod_height}</div>
					<div class='cacao major-text'>${price_sale} ₽</div>
				</div>
			</div>
			`;
			});

			const html = `
			<div class = "container-fluid col-md-6 products_container">
				<div class='row'>
					${htmlProducts}
				</div>
			</div>
		`;
		ROOT_PRODUCTS.innerHTML = html;
		}
	}

const productsPage = new Products();