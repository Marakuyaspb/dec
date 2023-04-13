/* PRODUCTS */


class Products_k1r {

	render() {
		let htmlProducts = '';
		
		CATALOG_K1R.forEach(({sku, category, model, fabric_type, fabric_name, product_name, product_img, is_new,available_in_showroom, available_for_delivery_2,available_for_delivery_28, prod_width, prod_depth, prod_height, price, price_sale}) => {
			
			htmlProducts += `
			
			<div class = "product_card sku m-2 p-4" id='${sku}' onClick='showDetails_arm(event);'>

				<div class = 'd-flex justify-content-between'>
					<h3 class='product_card_header'>${product_name}</h3>
				<div>
					<img class = 'is_new_icon' src='${is_new}'>
					<img class = 'available_icon' src='${available_in_showroom}'> 
					<img class = 'available_icon'src='${available_for_delivery_2}'>
					</div>
				</div>
				<center>
					<img src="${product_img}" class="img-fluid product_img_under">
				</center>
				<div class = 'd-flex justify-content-between'>
					<div class='cacao'>В наличии</div>
					<div class='old-price_cat_page'>${price} ₽</div>
				</div>
				<div class = 'd-flex justify-content-between'>
					<div class='cacao'>${prod_width}×${prod_depth}×${prod_height}</div>
					<div class='cacao price_cat_page'>${price_sale} ₽</div>
				</div>
			</div>
			`;
			});

			const html = `
			<div class='thin ms-5'><a href='http://decona.ru'>Главная</a> / <a href='http://decona.ru/products/'>Продукция</a> / <a href='http://decona.ru/category-k1r-system/'>Модульные системы</a>
			</div>
			<h4 class=ms-5 my-4>Кресла</h4>
			<div class = "products_container" id='products_container'>
				
					${htmlProducts}
				
			</div>
		`;
		ROOT_PRODUCTS_K1R.innerHTML = html;
		}
	}

const productsPage_k1r = new Products_k1r();