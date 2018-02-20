window.onload = function () {
  setTimeout(() => {
      document.querySelector('.loader').style.display = 'none';
  }, 1000);
};

window.onscroll = function() {
  let viewport = (window.pageYOffset || document.documentElement.scrollTop) / 2;
  let animateElements = document.querySelectorAll('.animate-block');

  animateElements.forEach(function (elem) {
      if(elem.getBoundingClientRect().top + 800 >= viewport) {
        elem.classList.add('zoomInDown');
      }
  });
};