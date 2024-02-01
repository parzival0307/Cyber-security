const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const totalSlides = slides.length;
let currentIndex = 0;

function prevSlide() {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSlidePosition();
}

function nextSlide() {
  currentIndex = Math.min(currentIndex + 1, totalSlides - 3);
  updateSlidePosition();
}

function updateSlidePosition() {
  const newPosition = -currentIndex * slides[0].offsetWidth;
  slidesContainer.style.transform = `translateX(${newPosition}px)`;
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
// $('.slides').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }  
//     ]
//   });