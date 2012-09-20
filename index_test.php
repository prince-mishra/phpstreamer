<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<ul>
<?php
for ($i=$_REQUEST['id']; $i<=10; $i++)
  {?>
  <li>
  <?php echo "The number is " . $i ?>
  </li>  
<?php } ?>
</ul>
</body>
</html>