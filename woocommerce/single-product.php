<?php
/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

get_header( 'shop' ); ?>

	<?php
		/**
		 * woocommerce_before_main_content hook.
		 *
		 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
		 * @hooked woocommerce_breadcrumb - 20
		 */
		do_action( 'woocommerce_before_main_content' );
	?>

		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>

			<?php wc_get_template_part( 'content', 'single-product' ); ?>

		<?php endwhile; // end of the loop. ?>


<!-- here I will add some code -->
		<div class='container'>
	<div class='row'>
		<div class='col-md-7'>
			<!-- slider with product -->
		</div>
		<div class='c
		ol-md-5'>
			<!-- static part of product -->
		</div>
	</div>
</div>
<div class='container'>
	<div class="d-flex flex-wrap">
		<div>$product_name</div>
		<div>$product_price</div>
		<div>$is_avaliable</div>
	</div>
	<div class="d-flex flex-wrap">
		<button>$to_order</button>
		<button>$get_3d</button>
		<button>$get_pdf</button>
	</div>
</div>


<div class="accordion" id="accordionExample"><!-- Описание -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Описание
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p id='description'></p>
          	</div>
        </div>
    </div>

    <div class="accordion-item"><!-- Схема и габариты -->
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Схема и габариты
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            	<div class='container'>
					<div class='row'>
						<div class='col-md-4 col-sm-12'>
	                		<table>
						<tr>
							<td>
								<p>Ширина, см
							</td>
							<td>
								<p id='prod_width'>
							</td>
						</tr>
						<tr>
							<td>
								<p>Глубина, см
							</td>
							<td>
								<p id='prod_depth'>
							</td>
						</tr>
						<tr>
							<td>
								<p>Высота, см
							</td>
							<td>
								<p id='prod_height'>
							</td>
						</tr>
						<tr>
							<td>
								<p>Вес товара, кг
							</td>
							<td>
								<p id='prod_weight'>
							</td>
						</tr>
						<tr>
							<td>
								<p>Высота сидения, см
							</td>
							<td>
								<p id='prod_seat_height'>
							</td>
						</tr>
						<tr>
							<td>Ширина сидения, см
							</td>
							<td>
								<p id='prod_seat_width'>
							</td>
						</tr>
						<tr>
							<td>
								<p>Глубина сидения, см
							</td>
							<td>
								<p id='prod_seat_depth'>
							</td>
						</tr>
						<tr>
							<td>
								<p>Ширина спинки, см
							</td>
							<td>
								<p id='prod_back_width'>
							</td>
						</tr>
							</table>
						</div>
						<div class='col-md-8 col-sm-12'>
							<img id=''>
							<img id=''>
						</div>
					</div>
				</div>		
          	</div>
        </div>
    </div>

    <div class="accordion-item"><!-- Характеристики -->
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Характеристики
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <h4>Основные</h4>
                <div class='container'>
					<div class='row'>
						<div class='col-md-6 col-sm-12'>
							<span>
								<p>Тип
								<p id='prod_type'>
							</span>
							<span>
								<p>Вид раскладывания
								<p id='prod_transform_type'>
							</span>
							<span>
								<p>Тип матраса
								<p id='prod_mattress_type'>
							</span>
						</div>
						<div class='col-md-6 col-sm-12'>
							<span>
								<p>Форма дивана
								<p id='prod_form'>
							</span>
							<span>
								<p>Стиль дизайна
								<p id='prod_style'>
							</span>
							<span>
								<p>Материал напонителя
								<p id='prod_fill_material'>
							</span>
						</div>
					</div>
				</div>
				<p id='prod_features'></p>
          	</div>
        </div>
    </div>

    <div class="accordion-item"><!-- Материал обивки -->
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Материал обивки
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p id='prod_exterior_material'>
				<img id='prod_exterior_material_photo'>
				<p>Больше образцов тканей вы можете посмотреть в наших салонах.
				<a href='http://decona.ru/showrooms/'><button class='btn-outline-gray'>Адреса салонов</button></a>
          	</div>
        </div>
    </div>

    <div class="accordion-item"><!-- Варианты исполнения ножек -->
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Варианты исполнения ножек
            </button>
        </h2>

        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            	<div>
	                <p>Массив дуба - природный материал в неповторимым рисунком
	                <p class='cacao small-text'>В вашем изделии узор будет уникальным и может отличаться отпредставленных
				</div>
				<div class='container-fluid'>
					<div class='row'>
						<div class='col-md-6 col-sm-12'>
							<div class='container-fluid'>
								<p class="card-text">Sand</p>
								<img class='pb1' src='http://decona.ru/wp-content/uploads/2023/02/Leg_sand.png'>
							</div>
							<div class='container-fluid'>
								<p class="card-text">Black</p>
								<img class='pb1' src='http://decona.ru/wp-content/uploads/2023/02/Leg_Black.png'>
							</div>
						</div>
						<div class='col-md-6 col-sm-12'>
							<div class='container-fluid'>
						    	<p class="card-text">Brandy</p>
						    	<img class='pb1' src='http://decona.ru/wp-content/uploads/2023/02/Leg_Brandy.png'>
									
							</div>
							<div class='container-fluid'>
								<p class="card-text">Arctic</p>
								<img class='pb1' src='http://decona.ru/wp-content/uploads/2023/02/Leg_Arctik.png'>					
							</div>
					</div>
          		</div>
        	</div>
		</div>
	</div>
    	

    <div class="accordion-item"><!-- Опции -->
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Опции
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            	<div>
                	<p>Вы можете заказать как диван с декоративными утяжками на сидении, приспинных подушках и подлокотниках, так и без них
                	</p>
                </div>
                <div class='container'>
                	<div class='row'>
						<div class='col-md-6 col-sm-12'>
							<p>С утяжками
							<img src="">
						</div>
						<div class='col-md-6 col-sm-12'>
							<p>Без утяжек
							<img src="">
						</div>
					</div>
				</div>
          	</div>
        </div>
    </div>
</div><!-- the end of accordion part -->


<div class='banner my-4'>
	<!-- SLIDER WITH COLLECTION -->
</div>


<!-- POP OVER THING -->
<div id='prod_pop_facts'>
</div>

<div>
	<p>
		Стоимость дивана в нестандартной комплектации рассчитывается в салоне, после выбора клиентом обивки и дополнительных опций. После того, как вы определилист, подписывается договор, гле прописаны все особенности товара, его доставка и гарантии.
	</p>
</div>

<div class="banner">
	<div class="row">
		<div class="col-md-4 rectangle latte_bg">
			<h2 class="rect-card  ps-4">Каталог</h2>
			<h2 class="ps-4">2023</h2>
			<a href="#" class="ms-4"><button class="btn-outline-gray">Скачать каталог</button></a>
		</div>
		<div class="col-md-4 rectangle dark-gray"> <!-- #50504E -->
			<h2 class="white rect-card ps-4">Покупка</h2>
			<h2 class="white ps-4">в расстрочку без</h2>
			<h2 class="white ps-4">первого взноса</h2>
			<a href="#" class="ms-4"><button class="btn-outline-white">Подробнее</button></a>
		</div>
		<div class="col-md-4 rectangle middle-gray ps-4"><!-- #CDCECF -->
			<h2 class="rect-card ms-4">Все акции и спецпредложения</h2>
			<a href="#" class="ms-4"><button class="btn-outline-gray">Все акции</button></a>
		</div>
	</div>
</div>




	<?php
		/**
		 * woocommerce_after_main_content hook.
		 *
		 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
		 */
		do_action( 'woocommerce_after_main_content' );
	?>

	<?php
		/**
		 * woocommerce_sidebar hook.
		 *
		 * @hooked woocommerce_get_sidebar - 10
		 */
		do_action( 'woocommerce_sidebar' );
	?>

<?php
get_footer( 'shop' );

/* Omit closing PHP tag at the end of PHP files to avoid "headers already sent" issues. */
