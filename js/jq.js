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


$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);


  
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });


  
let add = document.getElementById('increment');
let remove = document.getElementById('decrement');
let number = document.getElementById('number');

let counter =0;

add.addEventListener('click',function(){
  counter +=1
  number.innerHTML = counter;
});

remove.addEventListener('click',function(){
  counter -=1
  number.innerHTML = counter;
});

let add1 = document.getElementById('increment1');
let remove1 = document.getElementById('decrement1');
let number1 = document.getElementById('number1');

let counter1 =0;

add1.addEventListener('click',function(){
  counter1 +=1
  number1.innerHTML = counter1;
});

remove1.addEventListener('click',function(){
  counter1 -=1
  number1.innerHTML = counter1;
});

let add2 = document.getElementById('increment2');
let remove2 = document.getElementById('decrement2');
let number2 = document.getElementById('number2');

let counter2 =0;

add2.addEventListener('click',function(){
  counter2 +=1
  number2.innerHTML = counter2;
});

remove2.addEventListener('click',function(){
  counter2 -=1
  number2.innerHTML = counter2;
});
let add3 = document.getElementById('increment3');
let remove3 = document.getElementById('decrement3');
let number3 = document.getElementById('number3');

let counter3 =0;

add3.addEventListener('click',function(){
  counter3 +=1
  number3.innerHTML = counter3;
});

remove3.addEventListener('click',function(){
  counter3 -=1
  number2.innerHTML = counter2;
});






