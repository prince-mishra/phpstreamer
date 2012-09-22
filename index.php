<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Khatta Stream</title>
    <link   type="text/css"        rel="stylesheet" href="css/bootstrap.css"  />
    <link   type="text/css"        rel="stylesheet" href="css/structure.css"  />
    
    <!--[if lt IE 7]><link rel="stylesheet" href="http://blueimp.github.com/cdn/css/bootstrap-ie6.min.css"><![endif]-->
    <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <link rel="stylesheet" href="css/bootstrap-image-gallery.css">
    <script type="text/javascript" src="js/jquery-1.7.2.js"></script>
    <script type="text/javascript" src="js/jquery.hashchange.js"></script>
    <script type="text/javascript" src="js/keyboard.js"></script>
    
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/khatta.js"></script>
    <script type="text/javascript" src="js/photo.js"></script>
    <script type="text/javascript" src="js/structure.js"></script>
    <script src="js/load-image.min.js"></script>
    <script src="js/bootstrap-image-gallery.js"></script>
    <script src="js/jquery.mousewheel.js"></script>
    <script src="js/url.js"></script>
    <script src="js/operations.js"></script>
    <script src="js/keyboard_binding.js"></script>
</head>
<body>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span2">
        <div id="likebox">
            <iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Ffacebook.com%2Fkhattacorp&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=400456929993058" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px; padding:10px;" allowTransparency="true"></iframe>
        </div>
        <div id="loader">
            <img id="activeloader" src="images/82.gif"/>
            <img id="stoppedloader" src="images/stopped.png" class="hide"/>
        </div>
        <div id="controls" class="hide">
          <a class="btn btn-info modal-prev" id="previous">
	            <i class="icon-arrow-left icon-white"></i>
	            <span>Previous</span>
	        </a>
	        <a class="btn btn-primary modal-next" id="next">
	            <span>Next</span>
	            <i class="icon-arrow-right icon-white"></i>
	        </a>
	        <div id="paginator">
              <input type="hidden" name="curpage" value="1" />
              <input type="hidden" name="curtopic" value="1" />
              <input type="hidden" name="curcount" value="0" />
              <input type="hidden" name="pagesize" value="15" />
            </div>
        </div>
        <div id="topics">
          <h2 class="veg selected" query="1" title="Veg"><span>Veg</span></h2> 
          <h2 class="nonveg" query="2" title="Non Veg"><span>NonVeg</span></h2> 
          <h2 class="satire" query="3" title="Satire"><span>Satire</span></h2> 
          <h2 class="political" query="4" title="Political"><span>Political</span></h2> 
          <h2 class="recent" query="5" title="Recent"><span>Recent</span>
          <h2 class="random" query="6" title="Random"><span>Random</span></span></h2>
          <a id="loadphoto" class="btn btn-large btn-primary" href="javascript:;">Streamer</a>
        </div>
        <div id="credits">
          <p> 
          based on <a class="veg" href="http://twitter.com/">twitter</a>.
          inspired by <a class="nonveg" href="http://www.wefeelfine.org/">wefeelfine</a>.
          hand-crafted by <a class="satire" href="http://twitter.com/princemishra1">Prince Mishra</a> of <a class="political" href="http://khattacorp.com">KhattaCorp.</a>.
          <br />
          </p>
        </div>
         
      </div>
      <div class="span10">
        <div id="itemsWrapper">
          <div id="items"><li class="satire"><em>KhattaStream..!</em><br /></li>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal dialog -->
    <!-- modal-gallery is the modal dialog used for the image gallery -->
	<div id="modal-gallery" class="modal modal-gallery hide fade" style="margin-top: -289.5px; margin-left: -243.5px; display: none; ">
	    <div class="modal-header">
	        <a class="close" data-dismiss="modal">x</a>
	        <h3 class="modal-title" style="width: 443px; ">title</h3>
	    </div>
	    <div class="modal-body"><div class="modal-image" style="width: 443px; height: 443px; "><img src="" width="443" height="443" class="in"></div></div>
	    <div class="modal-footer">
	        <a class="btn modal-download" target="_blank" href="">
	            <i class="icon-download"></i>
	            <span>Download</span>
	        </a>
	        <a class="btn btn-success modal-play modal-slideshow" data-slideshow="5000" style="">
	            <i class="icon-white icon-pause"></i>
	            <span>Slideshow</span>
	        </a>
	        <a class="btn btn-info modal-prev" style="">
	            <i class="icon-arrow-left icon-white"></i>
	            <span>Previous</span>
	        </a>
	        <a class="btn btn-primary modal-next" style="">
	            <span>Next</span>
	            <i class="icon-arrow-right icon-white"></i>
	        </a>
	    </div>
	</div>
	<!-- modal dialog related code -->
      <!-- Loading modal -->
	<div class="modal hide" id="loading" tabindex="-1" role="dialog" aria-labelleddby="loadingLabel" aria-hidden="true">
	    <div class="modal-header">
	        <div id="loadingLabel">loading...</div>
	        <div class="modal-body">
	            Please wait while we reload.
	        </div>
	    </div>
	</div>
	<!-- wait modal -->
	<div class="modal hide" id="waiting" tabindex="-1" role="dialog" aria-labelleddby="waitingLabel" aria-hidden="true">
	    <div class="modal-header">
	        <div id="waitingLabel">Reloading...</div>
	    </div>
	</div>
</body>
</html>