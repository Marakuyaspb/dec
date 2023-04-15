/* PRODUCTS */


class Products {

	render() {
		let htmlProducts = '';
		
		CATALOG.forEach(({sku, category, model, fabric_type, fabric_name, product_name, product_img, product_img_mob, is_new,available_in_showroom, available_for_delivery_2,available_for_delivery_28, prod_width, prod_depth, prod_height, price, price_sale}) => {
			
			htmlProducts += `
			
			<div class = "product_card sku ${category} p-4" id='${sku}' onClick='showDetails(event);'>

					<div class = 'd-flex justify-content-between'>
						<h3 class='product_card_header'>${product_name}</h3>
					<div>
						<img class = 'is_new_icon' src='${is_new}'>
						<img class = 'available_icon' src='${available_in_showroom}'> 
						<img class = 'available_icon'src='${available_for_delivery_2}'>
						</div>
					</div>

					<center class='container-fluid mt-4 d-none d-md-block d-lg-block d-xl-block d-xxl-block'>
						<img src="${product_img}" class="img-fluid product_img_under">
					</center>

					<center class='container-fluid mt-5 d-block d-md-none'>
						<img src="${product_img_mob}" class="img-fluid product_img_under">
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

			</div>
			`;
			});

			const html = `
			<div class='thin ms-5'><a href='http://decona.ru'>Главная</a> / <a href='http://decona.ru/products/'>Продукция</a>
					</div>
			<div class = "products_container" id='products_container'>
				
					${htmlProducts}
				
			</div>
		`;
		ROOT_PRODUCTS.innerHTML = html;
		}
	}

const productsPage = new Products();