// $(document).ready(function () {
//     let currentSlide = 0;
//     const slides = $('.carousel-slide');
//     let dots = $('.dot');
    
//     function showSlide(index) {
//         currentSlide = (index + slides.length) % slides.length;
//         slides.removeClass('active');
//         slides.eq(currentSlide).addClass('active');
//         dots.removeClass('dot-active');
//         dots.eq(currentSlide).addClass('dot-active');
//     }
    
//     function changeSlide(offset) {
//         showSlide(currentSlide + offset);
//     }
    
//     $('.right-arrow').on('click', function () {
//         changeSlide(1);
//     });
    
//     $('.dots-container').on('click', '.dot', function () {
//         const dotIndex = $(this).index();
//         showSlide(dotIndex);
//     });
    
//     for (let i = 0; i < slides.length; i++) {
//         $('.dots-container').append('<div class="dot"></div>');
//     }
    
//     dots = $('.dot');
//     showSlide(currentSlide);
// });

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 
