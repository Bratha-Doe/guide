<?php
if(isset($_GET['show'])){
  $show=$_GET['show'];
}else{
  $show = "home";
}

if($show == "home"){
  include ("content/home.php");
}elseif ($show == "destination") {
  include ("content/destination.php");
}else {
  include ("conten/404.php");
}
 ?>
