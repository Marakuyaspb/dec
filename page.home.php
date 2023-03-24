<?php
/*
Template name: home
*/

get_header(); 
?>

<!-- General slider -->
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

<!-- Main info -->
<div class='container-fluid mt-2'>
	<div class='row'>
		<div class ='col-lg-4'>
		<!-- DESCTOP -->
			<div class='d-none d-md-block d-lg-block d-xl-block d-xxl-block' id='desctop-show'>
				<h1 class='pt-5 px-5'>Decona</h1>
				<h2 class='px-5 pt-3 pb-5'>Мебельное производство полного цикла</h2>
				<p class='px-5 major-text'>Наша задача – предложить потребителю ассортимент стилистически выверенных, качественных, логичных, современных товаров для обустройства интерьера, по таким ценам, чтобы как можно больше людей имели возможность ими обладать.</p>
				<p class='ps-5 major-text'>Бренд ELEMENTA имеет производственные мощности, обеспечивающие полный цикл создания мебели и предлагает клиентам комплектацию их интерьера мягкой мебелью и предметами интерьера.</p>
			</div>

			<!-- TABLET & PHONE -->
			<div class='d-block d-lg-none'>
				<h2 class='pt-5 px-2'>Decona</h2>
				<h3 class='pt-3 pb-5 px-2'>Мебельное производство полного цикла</h3>
				<p class='px-2'>Наша задача – предложить потребителю ассортимент стилистически выверенных, качественных, логичных, современных товаров для обустройства интерьера, по таким ценам, чтобы как можно больше людей имели возможность ими обладать.</p>
				<p class='ps-2'>Бренд ELEMENTA имеет производственные мощности, обеспечивающие полный цикл создания мебели и предлагает клиентам комплектацию их интерьера мягкой мебелью и предметами интерьера.</p>
			</div>
		</div>
		<div class ='col-lg-8 no-padding-right no-padding-left'>
			<img src='http://decona.ru/wp-content/uploads/2023/02/Work_1-main-1.png' class="img-fluid banner"/>
		</div>
	</div>
</div>


<!-- Black stylish banner -->
<!-- DESCTOP -->
<div class='d-none d-md-block d-lg-block d-xl-block d-xxl-block' id='desctop-show'>
	<div class="card no-border">
	  <img src="http://decona.ru/wp-content/uploads/2023/02/Product_main-11.png" class="card-img" alt="...">
	  <div class="card-img-overlay">
	    <h2 class="white ms-5 bottom-align">НОВЫЕ КОЛЛЕКЦИИ СТОЛИКОВ</h2>
	    <a class="bottom-align" href='#'><button class="btn-outline-white ms-5">Подробнее</button></a>
	  </div>
	</div>
</div>

<!-- TABLET & PHONE -->
<div class='pt-5 d-block d-md-none ' id='tablet-show'>
	<div class="card no-border">
	  <img src="http://decona.ru/wp-content/uploads/2023/03/Product_main-12.png" class="card-img" alt="...">
	  <div class="card-img-overlay">
	    <h3 class="white ms-2 pt-5 bottom-align">НОВЫЕ КОЛЛЕКЦИИ СТОЛИКОВ</h3>
	    <a class="bottom-align" href='#'><button class="btn-outline-white ms-2">Подробнее</button></a>
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