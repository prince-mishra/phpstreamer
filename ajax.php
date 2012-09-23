<?php
  error_reporting(E_ALL & ~E_NOTICE);
  require_once("database.php");
  $con = connectdb();
  $type = $_REQUEST['type'];
  if($type){
    $where = 'type = ' . $type;
    /*$begin = rand(1, 425);
    $end = $begin + 15;
    $where = 'id between '.$begin.' and '.$end;*/
    echo select_query('*', $where);
  }
 ?>