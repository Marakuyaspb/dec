<?php
/*
Template name: home
*/

get_header(); 
?>


<div class="main-head-slider">
	<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
		 <div class="carousel-indicators">
		    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
		    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
		 </div>
	 	<div class="carousel-inner">
		    <div class="carousel-item active">
		      <img src="http://decona.ru/wp-content/uploads/2023/02/Main-slider11.png" class="d-block w-100" alt="...">
		    </div>
		    <div class="carousel-item">
		      <img src="http://decona.ru/wp-content/uploads/2023/01/004_Post_LightMix-Interactive-copy-scaled.jpg" class="d-block w-100" alt="...">
		    </div>
		    <div class="carousel-item">
		      <img src="http://decona.ru/wp-content/uploads/2023/01/cam003_-scaled.jpg" class="d-block w-100" alt="...">
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
</div>


<div class='container-fluid'>
	<div class='row'>
		<div class ='col-md-4'>
			<h1 class='pt-5 px-5'>Decona</h1>
			<h2 class='px-5 pt-3 pb-5'>Мебельное производство полного цикла</h2>
			<p class='px-5 major-text'>Наша задача – предложить потребителю ассортимент стилистически выверенных, качественных, логичных, современных товаров для обустройства интерьера, по таким ценам, чтобы как можно больше людей имели возможность ими обладать.</p>
			<p class='ps-5 major-text'>Бренд ELEMENTA имеет производственные мощности, обеспечивающие полный цикл создания мебели и предлагает клиентам комплектацию их интерьера мягкой мебелью и предметами интерьера.</p>
		</div>
		<div class ='col-md-8 no-padding-right'>
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
	  <img src="http://decona.ru/wp-content/uploads/2023/02/Product_main-11-1.png" class="card-img" alt="...">
	  <div class="card-img-overlay">
	    <h2 class="white ms-5 pt-5 bottom-align">НОВЫЕ КОЛЛЕКЦИИ СТОЛИКОВ</h2>
	    <a class="bottom-align" href='#'><button class="btn-outline-white ms-5">Подробнее</button></a>
	  </div>
	</div>


</div>


<div class='container-fluid mb-5'>
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



<?php
get_footer();