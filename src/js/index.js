import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import $ from "jquery";
$('.banner').slick({
    slidesToShow: 1,
    infinite: true, 
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
}
);

$('.clients-list').slick({
    slidesToShow: 5,
    infinite: true, 
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    swipeToSlide: true,
}
);
$('.chuong-trinh-noi-bat-slick').slick({
  slidesToShow: 1,
  infinite: true, 
  autoplay: true,
  arrows: false,
  swipeToSlide: true,
  fade: true,
});
const bannerWrapper = document.querySelector('.banner-wrapper');
bannerWrapper.style.width = window.innerWidth;
window.onscroll = function() {myFunction()};
var header = document.querySelector(".header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}