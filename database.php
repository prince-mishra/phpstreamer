<?php
require_once 'config.php';
  function connectdb() {
    global $host, $user, $password, $db, $table;
    $con = mysql_connect($host, $user, $password) or die("unable to connect to host");
    mysql_select_db($db) or die('unable to select DB');
    return $con;
  }
  function select_query($columns, $where) {
    global $table;
    $arrResults = Array();
    $begin = rand(1, 425);
    $range = 15;
    $query = "select " . $columns . " from ". $table." limit ". $begin. ','.$range;
    $result = mysql_query($query);
    while($row = mysql_fetch_assoc($result)){
      $arrResults[] = $row;
    }
    $result = Array();
    $result['objects'] = $arrResults;
    return json_encode($result);
  }
/*
 * sanitize insert operation
 * */
?>