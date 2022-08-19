$(function () {
    $("#nav-menu-btn").click(function () {
      $("#list-hidden").slideToggle("fast");
    });
    $("#home-ul").click(function () {
      $("#list-hidden-home").slideToggle("fast");
    });
    $("#menu-ul").click(function () {
      $("#list-hidden-menu").slideToggle("fast");
    });
    $("#pages-ul").click(function () {
      $("#list-hidden-pages").slideToggle("fast");
    });
    $("#shop-ul").click(function () {
      $("#list-hidden-shop").slideToggle("fast");
    });
    $("#blog-ul").click(function () {
      $("#list-hidden-blog").slideToggle("fast");
    });
  
    $( "#blog" ).click(function() {
      $( "#mega-menu-blog" ).slideToggle();
    });
    $( "#shop" ).click(function() {
      $( "#mega-menu-shop" ).slideToggle();
    });
    $( "#pages" ).click(function() {
      $( "#mega-menu-pages" ).slideToggle();
    });
    $( "#p-menu" ).click(function() {
      $( "#mega-menu-menu" ).slideToggle();
    });
    $( "#home" ).click(function() {
      $( "#mega-menu-home" ).slideToggle();
    });
  });
  