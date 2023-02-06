(function () {
  'use strict';

  AOS?.init({
    ease: 'slide',
    once: true
  });

  var rellax = function () {
    var rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  };
  rellax();

  ////////////////////////////////////

  var counter = function () {
    function countUp(elem) {
      var current = elem.innerHTML;

      var timeIntervalBeforeIncrement = 2000 / elem.getAttribute('data-count');

      var interval = setInterval(increase, timeIntervalBeforeIncrement);

      function increase() {
        elem.innerHTML = current++;
        if (current > elem.getAttribute('data-count')) {
          clearInterval(interval);
        }
      }
    }

    var span = document.querySelectorAll("[id^='count']");

    var i = 0;
    for (i = 0; i < span.length; i++) {
      countUp(span[i]);
    }
  };

  ////////////////////////////////////

  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.ftco-counter-section');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    var i;
    for (i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        if (!element.classList.contains('viewed')) {
          element.classList.add('viewed');
          counter();
        } else {
          if (element.classList.contains('viewed')) {
          }
        }
        // console.log('igo');
      }
    }
  }
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();

  ////////////////////////////////////

  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
  });
})();
