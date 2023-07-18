<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header('new');
?>

<div class="container-fluid ps-4 mt-5">
	<div class='row'>
		<div class='col-md-6'>
			<h2 class='mb-5'>К сожалению, такой страницы нет</h2>
			<?php get_search_form(); ?>
		</div>
		<div class='col'>
			<img class='d-none d-md-block d-lg-block d-xl-block d-xxl-block' src='http://temp.decona.ru/wp-content/uploads/2023/03/Portland_Jazz-01_sand_side-scaled.jpg'>
		</div>
	</div>
</div>



<?php
get_footer();
