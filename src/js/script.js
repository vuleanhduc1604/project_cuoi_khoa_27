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
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
}
);
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
