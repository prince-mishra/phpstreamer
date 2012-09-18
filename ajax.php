<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require_once("database.php");
  $con = connectdb();
  $type = $_REQUEST['type'];
  if($type){
    sleep(3);
    $where = 'type = ' . $type;
    echo select_query('*', $where);
  }
 ?>