<?php
/*
Template name: home
*/

get_header(); 
?>

<!-- General slider start-->
	<!-- DESCTOP -->
	<div class='d-none d-md-block d-lg-block d-xl-block d-xxl-block' id='desctop-show'>
		<div class="main-head-slider">
			<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
				 <div class="carousel-indicators">
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				 </div>
			 	<div class="carousel-inner">
			 		 <div class="carousel-item active">
				      	<img src="http://decona.ru/wp-content/uploads/2023/03/Untitled-4-1.png" class="d-block w-100" alt="...">
				    </div>
				    <div class="carousel-item">
				      	<img src="http://decona.ru/wp-content/uploads/2023/02/Main-slider11.png" class="d-block w-100" alt="...">
				    </div>
				    <div class="carousel-item">
				      	<img src="http://decona.ru/wp-content/uploads/2023/01/004_Post_LightMix-Interactive-copy-scaled.jpg" class="d-block w-100" alt="...">
				    </div>
			  </div>
			  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="visually-hidden">Previous</span>
			  </button>
			  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
			    <span class="visually-hidden">Next</span>
			  </button>
			</div>

			<div class="ps-5 over-slider">
				<h1 class="white">BASE</h1>
				<h5 class="white">Модульная система</h5>
				<a href='http://decona.ru/products/' class='ms-2 pb-3'><button class='btn-outline-white'>Подробнее</button></a>
			</div>
		</div>
	</div>
	<!-- TABLET & PHONE -->
	<div class='pt-5 d-block d-md-none ' id='tablet-show'>
	<div class="main-head-slider">
		<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
			 <div class="carousel-indicators">
			    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active carousel-btn-bottom" aria-current="true" aria-label="Slide 1"></button>
			    <button type="button" class="carousel-btn-bottom" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
			    <button type="button" class="carousel-btn-bottom" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			    <button type="button" class="carousel-btn-bottom" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
			 </div>
		 	<div class="carousel-inner">
			    <div class="carousel-item active">
			      <img src="http://decona.ru/wp-content/uploads/2023/03/verticall_1.png" class="d-block w-100" alt="...">
			    </div>
			    <div class="carousel-item">
			      <img src="http://decona.ru/wp-content/uploads/2023/03/verticall_0.png" class="d-block w-100" alt="...">
			    </div>
			    <div class="carousel-item">
			      <img src="http://decona.ru/wp-content/uploads/2023/03/verticall_2.png" class="d-block w-100" alt="...">
			    </div>
			    <div class="carousel-item">
			      <img src="http://decona.ru/wp-content/uploads/2023/03/verticall_3.png" class="d-block w-100" alt="...">
			    </div>
		  </div>
		</div>

		<div class="ps-3 over-slider====">
			<h1 class="white">BASE</h1>
			<p class="white">Модульная система</p>
			<a href='http://decona.ru/products/' class='ms-2 pb-3'><button class='btn-outline-white'>Подробнее</button></a>
		</div>
	</div>
	</div>
<!-- General slider end -->

<div id="goods_all"></div> 
<div id="goods_show" class ="products_container"></div> 
<div id='goods_details'></div>

<div id="spinner"></div> 
<div id="error"></div> 

<!-- CATEGORIES -->
<div class="container-fluid mt-2" id='goods_categories'>
	<div class='row'>
		<div class="col-md-6 col-sm-12 py-1 row_prod_catgories" id="k1r" onclick="filterProducts(event);">
			<div class='latte_wrap p-4'>
	  			<!-- a href='http://decona.ru/category-k1r-system/' -->
	  				<div class ='pt-5'>
			  			<p class='major-text'>Модульные системы</h4>
			  			<p>Конфигурация под любое пространство
			  		</div>
	  				<img class='img-fluid card-product-category'  src="http://decona.ru/wp-content/uploads/2023/03/Prod_Base-copy.png">
		  		</a>
	  		</div>
	  	</div>

	  	<div class="col-md-6 col-sm-12 py-1 row_prod_catgories" id="corner" onclick="filterProducts(event);">
	  		<div class='latte_wrap p-4'>
				<!-- a href='http://decona.ru/category-corner/' -->
					<div class ='pt-5'>
			  			<p class='major-text'>Угловые диваны</h4>
			  			<p>Конфигурация под любое пространство
			  		</div>
	  				<img class='img-fluid card-product-category'  src="http://decona.ru/wp-content/uploads/2023/03/Prod_Naples-copy-1568x784.png">
				</a>
			</div>
		</div>
	  	
	</div>

	<div class='row '>
		<div class="col-md-6 col-sm-12 py-1 row_prod_catgories" id="strict">
			<div class='latte_wrap p-4'>
				<!-- a href='#' -->
					<div class ='pt-5 ps-5'>
			  			<p class='major-text'>Прямые диваны</h4>
			  			<p>Конфигурация под любое пространство
			  		</div>
	  				<img class='img-fluid card-product-category'  src="http://decona.ru/wp-content/uploads/2023/03/Prod_Borneo-copy.png">
				</a>
			</div>
		</div>
		<div class="col-md-6 col-sm-12 py-1 row_prod_catgories" id="arm" onclick="filterProducts(event);">
			<div class='latte_wrap p-4'>
				<!-- a href='http://decona.ru/category-armchair/' -->
					<div class ='pt-5 ps-5'>
			  			<p class='major-text'>Кресла</h4>
			  			<p>Конфигурация под любое пространство
			  		</div>
	  				<img class='img-fluid card-product-category'  src="http://decona.ru/wp-content/uploads/2023/03/Prod_Brooklyn-copy.png">
				</a>
			</div>
		</div>
	</div>
	<div class='row'>
		<div class="col-md-6 col-sm-12 py-1 row_prod_catgories" id="bed" >
			<div class='latte_wrap p-4'>
				<!-- a href='#' -->
					<div class ='pt-5 ps-5'>
			  			<p class='major-text'>Кровати</h4>
			  			<p>Конфигурация под любое пространство
			  		</div>
					<img class='img-fluid card-product-category'  src="http://decona.ru/wp-content/uploads/2023/03/Prod_Beds-copy.png">
				</a>
			</div>
		</div>
		<div class="col-md-6 col-sm-12 py-1 row_prod_catgories" id="table">
			<div class='latte_wrap p-4'>
				<!-- a href='#' -->
					<div class ='pt-5 ps-5'>
			  			<p class='major-text'>Столы</h4>
			  			<p>Конфигурация под любое пространство
			  		</div>
	  				<img class='img-fluid card-product-category'  src="http://decona.ru/wp-content/uploads/2023/03/Prod_Tables-copy.png">
				</a>
			</div>
		</div>
	</div>
	<div class='row'>
		<div class="col-md-6 col-sm-12 py-1 row_prod_catgories" id="pouf" onclick="filterProducts(event);">
			<div class='latte_wrap p-4'>
				<!-- a href='http://decona.ru/category-pouf/' -->
					<div class ='pt-5 ps-5'>
			  			<p class='major-text'>Пуфы</h4>
			  			<p>Конфигурация под любое пространство
			  		</div>
	  				<img class='img-fluid card-product-category'  src="http://decona.ru/wp-content/uploads/2023/03/Prod_Pouf-copy.png">
				</a>
			</div>
		</div>
		<div class="col-md-6 col-sm-12 py-1 row_prod_catgories" id="accessory" >
			<div class='latte_wrap p-4'>
				<!-- a href='#' -->
					<div class ='pt-5 ps-5'>
			  			<p class='major-text'>Аксессуары</h4>
			  			<p>Конфигурация под любое пространство
			  		</div>
	  				<img class='img-fluid card-product-category'  src="http://decona.ru/wp-content/uploads/2023/03/Prod_Pod-copy.png">
				</a>
			</div>
		</div>
	</div>
</div>

<!-- GRAY RECTANGLES START -->
	<!-- DESKTOP -->
	<div class='container-fluid mb-5 d-none d-lg-block d-xl-block d-xxl-block' id='desctop-show'>
		<div class='row'>
			<div class ='col-md-4 rectangle latte_bg'> <!-- #F6F1EE -->
				<div class='bottom-align'>
					<h2 class='rect-card ps-4'>Каталог</h2>
					<h2 class='ps-4'>2023</h2>
					<a href='#' class='ms-4'><button class='btn-outline-gray'>Скачать каталог</button></a>
				</div>
			</div>
			<div class ='col-md-4 rectangle dark-gray'> <!-- #50504E -->
				<div class='bottom-align'>
					<h2 class='white rect-card ps-4'>Свяжитесь</h2>
					<h2 class='white ps-4'>с нами</h2>
					<a href='#' class='ms-4'><button class='btn-outline-white'>Обратная связь</button></a>
				</div>
			</div>
			<div class ='col-md-4 rectangle middle-gray ps-4'><!-- #CDCECF -->
				<div class='bottom-align'>
					<h2 class='rect-card ms-4'>Все акции и спецпредложения</h2>
					<a href='#' class='ms-4'><button class='btn-outline-gray'>Все акции</button></a>
				</div>
			</div>
		</div>
	</div>

	<!-- TABLET -->
	<div class='container-fluid pt-5 d-none d-sm-block d-md-block d-lg-none' id='tablet-show'>
		<div class='row'>
			<div class ='col-md-4 rectangle latte_bg'> <!-- #F6F1EE -->
				<div class='bottom-align'>
					<h3 class='rect-card ps-4'>Каталог</h3>
					<h3 class='ps-4'>2023</h3>
					<a href='#' class='ms-4'><button class='btn-outline-gray'>Скачать каталог</button></a>
				</div>
			</div>
			<div class ='col-md-4 rectangle dark-gray'> <!-- #50504E -->
				<div class='bottom-align'>
					<h3 class='white rect-card ps-4'>Свяжитесь</h3>
					<h3 class='white ps-4'>с нами</h3>
					<a href='#' class='ms-4'><button class='btn-outline-white'>Обратная связь</button></a>
				</div>
			</div>
			<div class ='col-md-4 rectangle middle-gray ps-4'><!-- #CDCECF -->
				<div class='bottom-align'>
					<h3 class='rect-card ps-4'>Все акции и спецпредложения</h3>
					<a href='#' class='ms-4'><button class='btn-outline-gray'>Все акции</button></a>
				</div>
			</div>
		</div>
	</div>

	<!-- PHONE -->
	<div class='container-fluid pt-5 d-block d-sm-none' id='phone-show'>
		<div class='row'>
			<div class ='col-md-4 rectangle latte_bg'> <!-- #F6F1EE -->
				<div class='bottom-align'>
					<h3 class='rect-card ps-2'>Каталог</h3>
					<h3 class='ps-2'>2023</h3>
					<a href='#' class='ms-2'><button class='btn-outline-gray'>Скачать каталог</button></a>
				</div>
			</div>
			<div class ='col-md-2 rectangle dark-gray'> <!-- #50504E -->
				<div class='bottom-align'>
					<h3 class='white rect-card ps-2'>Свяжитесь</h3>
					<h3 class='white ps-2'>с нами</h3>
					<a href='#' class='ms-2'><button class='btn-outline-white'>Обратная связь</button></a>
				</div>
			</div>
			<div class ='col-md-4 rectangle middle-gray ps-2'><!-- #CDCECF -->
				<div class='bottom-align'>
					<h3 class='rect-card ms-2'>Все акции и спецпредложения</h3>
					<a href='#' class='ms-2'><button class='btn-outline-gray'>Все акции</button></a>
				</div>
			</div>
		</div>
	</div>
<!-- GRAY RECTANGLES END -->


<?php
get_footer();