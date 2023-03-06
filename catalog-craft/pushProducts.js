/* PRODUCTS */


class Products {

	render() {
		let htmlCatalog = '';
		
		CATALOG.forEach(({carousel_item_1,carousel_item_2, carousel_item_3, carousel_item_4, carousel_item_5, product_name, price, price-sale, description, prod_width, prod_depth, prod_height, prod_weight, prod_seat_height, prod_seat_width, prod_seat_depth, prod_back_width, product_type, transform_type, matress_type, product_form, product_style, product_inside, features, about_product_fabric, product_fabric_about, product_fabric_img,}) => {
			console.log('aaaa!');

			htmlCatalog += `
			
			<div class = "product_card">
			<center>
				<img src="${photo}" class="model_photo img-responsive"/>
			</center>
			<center>
				<h3 class="py-1">${model_name}</h3>
			</center>
			<center>
				<span class="model_price">${price} руб.</span>
			</center>
			<span class="characteristics">Характеристики:<span>
			<div><br></div>
			<table>
				<tr>
					<td class="model_parametr">Макс. площадь:
					</td>
					<td>до ${square} кв.м.
					</td>
				</tr>
				<tr>
					<td class="model_parametr">Макс. мощность:
					</td>
					<td>
					${max_power} кВт
					</td>
				</tr>
				<tr>
					<td class="model_parametr">Уровень шума:
					</td>
					<td>
					${noize} дБ
					</td>
				</tr>
					<tr>
					<td class="model_parametr">Инвенторная технология:
					</td>
					<td>
					${inv_tech}
					</td>
				</tr>
				<tr>
				<td class="model_parametr">Класс энергоэффективности:
					</td>
					<td>
					${en_eff_class}
					</td>
				</tr>
				<tr>
					<td class="model_parametr">Управление по wi-fi:
					</td>
					<td>
					${wi_fi}
					</td>
				</tr>
			</table>
 			<center class="mt-5">
        		<button type="button" class="order_button"> Заказать</button>
    		</center>
			</div>
			`;
			});

			const html = `
			<div class = "container-fluid products_container">
				${htmlCatalog}
			</div>
		`;
		ROOT_PRODUCTS.innerHTML = html;
		}
	}

const productsPage = new Products();