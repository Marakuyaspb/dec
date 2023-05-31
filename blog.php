<?php
/**
 * The main template file
 */

get_header(); ?>

<?php
$head_photo = "
<div class='main-head-slider'>
	<img src='http://temp.decona.ru/wp-content/uploads/2023/02/New-showrooms-11-1.png' class='fluid'>
</div>
";

?>
<div class='main-head-slider'>
			<img src='http://temp.decona.ru/wp-content/uploads/2023/02/New-showrooms-11-1.png' class='fluid'>
		</div>
<!--  -->
<?php if ( is_home() && ! is_front_page() && ! empty( single_post_title( '', false ) ) ) :
 ?>
	<header class="page-header alignwide">
		<div class='main-head-slider'>
			<img src='http://temp.decona.ru/wp-content/uploads/2023/02/New-showrooms-11-1.png' class='fluid'>
		</div>
		<h1 class="page-title"><?php single_post_title(); ?></h1>
	</header><!-- .page-header -->
<?php endif; ?>

<?php
if ( have_posts() ) {

	// Load posts loop.
	while ( have_posts() ) {
		
		the_post();

		get_template_part( 'template-parts/content/content', get_theme_mod( 'display_excerpt_or_full_post', 'excerpt' ) );
	}

	// Previous/next page navigation.
	twenty_twenty_one_the_posts_navigation();

} else {

	// If no content, include the "No posts found" template.
	echo "
		<div class='main-head-slider'>
			<img src='http://temp.decona.ru/wp-content/uploads/2023/02/New-showrooms-11-1.png' class='fluid'>
		</div>
		";
	get_template_part( 'template-parts/content/content-none' );

}

get_footer();
