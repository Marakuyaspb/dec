<?php
if( ! defined( 'ABSPATH' ) ) {
	exit;
}

remove_action( 'woocommerce_before_single_product', 'woocommerce_show_product_images', $priority = 20 );

add_action( 'woocommerce_before_single_product_summary', 'decona_wrapper_product_start()', 5 );
function decona_wrapper_product_start() {
	?>
	<div class='container hate life'>
		<div class='row'>
			<img src="http://decona.ru/wp-content/uploads/2023/02/Product_main-11.png">
		<?php
}


add_action( 'woocommerce_after_single_product_summary', 'decona_wrapper_product_end()', 5 );
function decona_wrapper_product_end() {
	?>
		</div>
	</div>
		<?php
}