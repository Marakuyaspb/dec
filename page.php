<?php
/**
 * The template for displaying all single posts
 *
 */

get_header();

$head_photo = "
<div class='main-head-slider'>
    <img src='http://decona.ru/wp-content/uploads/2023/02/New-showrooms-11-1.png' class='fluid'>
</div>
";

echo $head_photo;

/* Start the Loop */
while ( have_posts() ) :
	the_post();
	get_template_part( 'template-parts/content/content-page' );

	// If comments are open or there is at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}
endwhile; // End of the loop.

get_footer();
