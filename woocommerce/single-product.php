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
