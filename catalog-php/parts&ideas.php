<?php
$name = "example"; // define the name variable

// define the file path and name
$file_path = "mydirectory/aaaa/catalog/content_$name.php";

// open the file for writing
$file = fopen($file_path, "w");

// write the content to the file
fwrite($file, "<h2>Hello</h2>");

// close the file
fclose($file);

// check if the file was created successfully
if (file_exists($file_path)) {
  echo "File created successfully!";
} else {
  echo "Error creating file.";
}
?>


product_img_mob
carousel_item_1_mob, carousel_item_2_mob, carousel_item_3_mob, carousel_item_4_mob, carousel_item_5_mob

collection, category

/deconaru/public_html/wp-content/uploads/goods_pics/COLLECTIONS/CONSONO/CONSONO_MODELS/CONSONO-K1R-ANG-M2-KNPL/JAZZ 01/Goods/



id='goods_categories'







/*


$sql = ("SELECT sku FROM goods_woder");
    $sku = mysqli_fetch_assoc($sql);

    if($result = $conn->query($sql)){
      while($row = $result->fetch_array()){
      echo $sku;      
      echo "
        <div class = 'product_card sku m-2 p-4'> $sku </div>
        ";
    }


      echo "
      <div class = 'product_card sku m-2 p-4' id='$[sku]' onClick='showDetails(event);'>

        <div class = 'd-flex justify-content-between'>
          <h3 class='product_card_header'>" . $row[product_name] . "</h3>
        <div>
          <img class = 'is_new_icon' src='" . $row[is_new] . "'>
          <img class = 'available_icon' src='" . $row[available_in_showroom] . "'> 
          <img class = 'available_icon'src='" . $row[available_for_delivery_2] . "'>
          </div>
        </div>
        <center>
          <img src='" . $row[product_img] . "'class='img-fluid product_img_under'>
        </center>
        <div class = 'd-flex justify-content-between'>
          <div class='cacao'>В наличии</div>
          <div class='old-price_cat_page'>" . $row[price] . "₽</div>
        </div>
        <div class = 'd-flex justify-content-between'>
          <div class='cacao'> . $row[prod_width]" . "×" . $row[prod_depth]×$[prod_height]"</div>
          <div class='cacao price_cat_page'>" . $row[price_sale] . "₽</div>
        </div>
      </div>

      ";
*/



/*
      echo "<table><tr><th>Id</th><th>AAAA</th><th>AAAA1</th></tr>";
      foreach($result as $row)[
          echo "<tr>";
              echo "<td>" . $row["sku"] . "</td>";
              echo "<td>" . $row["category"] . "</td>";
              echo "<td>" . $row["is_new"] . "</td>";
          echo "</tr>";
      ]
      echo "</table>";
      $result->free();


      } else{
      echo "Ошибка: " . $conn->error;
  }
  $conn->close();
  ?>
*/