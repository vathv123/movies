window.onload = function() {
    const swiper = new Swiper('.new-upload', {
        loop: true, // Makes the swiper loop infinitely
        autoplay: {
          delay: 3500, // Auto-scroll every 3.5 seconds
          disableOnInteraction: false, // Continue auto-scrolling even if user interacts
        },
        spaceBetween: 10, // Gap between slides
        slidesPerView: 'auto', // Adjust this as needed for your layout
        speed: 2500, // Smooth transition speed
        behavior: 'smooth',
        lazy : true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      setInterval(() =>{
        swipe.update();
      },1500);
};

let scrollSpeed = 1; // Adjust the scroll speed multiplier

window.addEventListener('wheel', function(event) {
  event.preventDefault(); // Prevent default scrolling behavior
  window.scrollBy({
    top: event.deltaY * scrollSpeed,
    left: 0,
    behavior: 'smooth',
  });
}, { passive: false });

document.querySelector('.movie').addEventListener('click', () => {
    document.querySelector('.movie').style.color = 'rgb(173, 18, 18)';
    document.querySelector('.home').style.color = 'white';
    
});
document.querySelector('.home').addEventListener('click', () => {
    document.querySelector('.home').style.color = 'rgb(173, 18, 18)';
    document.querySelector('.movie').style.color = 'white';
    document.querySelector('.contact-me').style.color = 'white';
});
document.querySelector('.contact-me').addEventListener('click', () => {
    document.querySelector('.contace-me').style.color = 'rgb(173, 18, 18)';
    document.querySelector('.movie').style.color = 'white';
    document.querySelector('.home').style.color = 'white';
});



