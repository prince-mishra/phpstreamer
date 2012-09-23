<?php
  require_once 'config.php';
  //listdir();
  function listdir() {
    global $images_dir, $thumbs_dir, $thumbs_width;
    $exclude_list = array(".", "..");
    $image_files = array_diff(scandir($images_dir), $exclude_list);
    if(count($image_files)) {
      $index = 0;
      $str = '';
      foreach($image_files as $index=>$file) {
        $index++;
        $thumbnail_image = $thumbs_dir.$file;
        if(!file_exists($thumbnail_image)) {
          $extension = get_file_extension($thumbnail_image);
          if($extension) {
            make_thumb($images_dir.$file,$thumbnail_image,$thumbs_width);
            
          }
        }
        $str = $str.'<li class="thumb"><a rel="gallery" class="thumb_a" href="'.$images_dir.$file.'" title=""><img src="'.$thumbnail_image.'" height="75px" width="75px;"></a></li>';
      }
    }
    return $str;
  }
  /* function:  generates thumbnail */
  function make_thumb($src,$dest,$desired_width) {
    /* read the source image */
    $ext = get_file_extension($src);
    switch($ext){
      case "jpeg":
        $source_image = imagecreatefromjpeg($src); //jpeg file
        break;
      case "jpg":
        $source_image = imagecreatefromjpeg($src); //jpeg file
        break;
      case "gif":
        $source_image = imagecreatefromgif($src); //gif file
        break;
      case "png":
        $source_image = imagecreatefrompng($src); //png file
        break;
      default:
        $source_image = false;
        break;
    }
    if ($source_image != false) {
      $width = imagesx($source_image);
      $height = imagesy($source_image);
      /* find the "desired height" of this thumbnail, relative to the desired width  */
      $desired_height = floor($height*($desired_width/$width));
      /* create a new, "virtual" image */
      $virtual_image = imagecreatetruecolor($desired_width,$desired_height);
      /* copy source image at a resized size */
      imagecopyresized($virtual_image,$source_image,0,0,0,0,$desired_width,$desired_height,$width,$height);
      /* create the physical thumbnail image to its destination */
      imagejpeg($virtual_image,$dest);
    }
    
  }
  /* function:  returns a file's extension */
  function get_file_extension($file_name) {
    return substr(strrchr($file_name,'.'),1);
  }
?>
