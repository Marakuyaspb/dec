/* PRODUCTS */


class Products {

	render() {
		let htmlProducts = '';
		
		CATALOG.forEach(({sku, model, fabric_type, fabric_name, product_name, product_img, is_new,available_in_showroom, available_for_delivery_2,available_for_delivery_28, prod_width, prod_depth, prod_height, price, price_sale}) => {
			
			htmlProducts += `
			
			<div class = "product_card sku m-2" id='${sku}' onClick='showDetails(event);' onClick='showPopOvers(event);'>
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
			<div class='thin ms-5'><a href='http://decona.ru'>Главная</a> / <a href='http://decona.ru/products/'>Продукция</a> / <a href='http://decona.ru/line-sofas/'>Прямые диваны</a>
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