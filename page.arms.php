<?php
/*
Template name: arms
*/

get_header('new'); 
?>
<h2 class="ms-4">Кресла или нет?</h2>

	<?php
		
		//connection
		$conn = mysqli_connect("localhost", "deconaru", "WULk_JT76BF7KULL", "deconaru");
		
		$query = "SELECT * FROM goods_woder";
		
		$result = mysqli_query($conn, $query);	
		
		while ($row = mysqli_fetch_array($result)) {
		    echo "<p>" . $row['sku'] . "<br>";
		}
		
		mysql_close();
	?>
	

		

<?php
get_footer();