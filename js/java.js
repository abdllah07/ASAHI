let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}


let nums = document.querySelectorAll(".awesome-boxese  .num");
let section = document.getElementById("count");
let started = false;  



window.onscroll = function () {
  if (window.scrollY >= section.offsetTop -500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}



let slid1 = document.getElementById("slide-one")
let slid2 = document.getElementById("slide-tow")
let slid3 = document.getElementById("slide-three")
 

let section_slide = document.getElementById('slideshow-container');


if (window.scrollY >= section_slide.offsetTop - 50) {

  console.log('hi');

    slid1.style.opacity = slid1.dataset.opacity;
    slid2.style.opacity = slid2.dataset.opacity;
    slid3.style.opacity = slid3.dataset.opacity;

  // imgs.forEach((img) => {
  //   img.style.opacity = img.dataset.opacity;
  // });
  // divs.forEach((div) => {
  //   div.style.opacity = div.dataset.opacity;
  // });
}



