<?php
/*
Plugin Name: Catalog Update
Plugin URI: http://страница_с_описанием_плагина_и_его_обновлений
Description: It will update info in the catalog according SQL data
Version: 1.0
Author: Anna Andreevna
Author URI: http://t.me/anna.book
*/

define('catalogupdate', plugin_dir_path(__FILE__));

function catalogupdate_update($get_date_sql){
    return $get_date_sql;
}

add_filter('get_date_sql', 'catalogupdate_update');

?>