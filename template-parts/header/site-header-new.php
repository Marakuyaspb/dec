<?php
/**
 * Displays the site header.
 *

 */


$header_by_hands = "<nav class='navbar navbar-expand-lg bg-light'>
  <div class='container-fluid'>
    <a class='navbar-brand' href='http://decona.ru/'>Decona</a>
    <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
      <span class='navbar-toggler-icon'></span>
    </button>
    <div class='collapse navbar-collapse' id='navbarNav'>
      <ul class='navbar-nav'>
        <li class='nav-item'>
          <a class='nav-link active' aria-current='page' href='http://decona.ru/products/'>Продукция</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='http://decona.ru/showrooms/'>Шоурумы</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='http://decona.ru/blog/'>Блог</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='http://decona.ru/about/'>О фабрике</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='http://decona.ru/payment/'>Оплата и доставка</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='http://decona.ru/contact/'>Контакты</a>
        </li>
        <li class='nav-item'>
            <span>
                <a href='#'>
                <img src='http://decona.ru/wp-content/uploads/2023/01/icon_light_inst.png' class='wp-image-110' alt='instagram'></a>
                <a href='#'>
                    <img src='http://decona.ru/wp-content/uploads/2023/01/icon_light_tg.png' class='wp-image-110' alt='telegram'></a>
               <a href='#'>
                    <img src='http://decona.ru/wp-content/uploads/2023/01/icon_light_vk.png' class='wp-image-110' alt='vkontakte'></a>
                
                <a href='#'>
                        <img src='http://decona.ru/wp-content/uploads/2023/01/icon_light_ok.png' class='wp-image-110' alt='odnoklassniky'></a>
                <a href='#'>
                        <img src='http://decona.ru/wp-content/uploads/2023/01/icon_light_fb.png' class='wp-image-110' alt='facebook'></a>
                
                </span>
        </li>
      </ul>
    </div>
  </div>
</nav>";
?>


<header id='masthead' class=''>    
   <!--  <script type='text/javascript' src='/wp-content/themes/deco_theme/assets/js/bootstrap.min.js'></script> -->
    <!-- <script type='text/javascript' src='/wp-content/themes/deco_theme/assets/js/bootstrap.bundle.js'></script> -->

<?php
    echo $header_by_hands;
?>
   

</header><!-- #masthead -->
