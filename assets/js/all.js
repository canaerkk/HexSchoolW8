"use strict";
"use strict";

(function () {
  'use strict'; // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout

  var lgbreakpoint = window.matchMedia('(max-width: 992px)'); // keep track of swiper instances to destroy later

  var mySwiper;
  var listenSwiper; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (lgbreakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing

      return;
    } else if (lgbreakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  }; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////


  var enableSwiper = function enableSwiper() {
    mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1.5,
      spaceBetween: 30
    });
    console.log('mySwiper');
  };

  var enableListenSwiper = function enableListenSwiper() {
    listenSwiper = new Swiper(".listenSwiper", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      grid: {
        rows: 3,
        fill: 'column'
      },
      breakpoints: {
        768: {
          slidesPerView: 2.1,
          grid: {
            rows: 2
          }
        },
        1200: {
          slidesPerView: 3,
          grid: {
            rows: 2
          }
        }
      }
    });
    console.log('listenSwiper');
  }; //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // keep an eye on viewport size changes


  lgbreakpoint.addListener(breakpointChecker); // kickstart

  breakpointChecker();
  enableListenSwiper();
})();
/* IIFE end */
//# sourceMappingURL=all.js.map
