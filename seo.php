<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta name="keywords" content="Brudan,Print Media,Digital,Web,Mobile,Android,Windows Mobile,Blackberry,Uganda,Hive,Android,Web Frameworks,Animation,3D,Graphics,Logo">
	<meta name="description" content="Brudan is all about Mobile, Web and 3D.">
    <meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<meta name="author" content="trashboy.mine.nu" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>
    <script src="js/jquery-1.6.1.min.js"></script>
    <link rel="shortcut icon" href="images/favicon.ico">
	<title>Brudan | SEO (Search Engine Optimization)</title>
</head>

<body>
<?php include_once("analyticstracking.php") ?>
    <?php include('includes/header.php'); ?>
  <?php include('includes/seocontent.php'); ?>
   <?php include('includes/footer.php'); ?>
    
<script type="text/javascript">
   /* $(function() {
        $('.box').mouseover(function () {
            $('.box').animate({ opacity: 0.8 }, 800);
        });
    }); */

$(function() {
            $('.box').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 0.7 }, 300);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 1.0 }, 300);
                   })
                });
        });

</script>
</body>
</html>