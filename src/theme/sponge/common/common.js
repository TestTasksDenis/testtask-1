window.onload = function () {
    function animateContent() {
        let viewport = parseInt(screen.availHeight / 3);
        let animateElements = document.querySelectorAll('.animate-block');

        animateElements.forEach(function (elem) {
            console.log(viewport, elem.getBoundingClientRect().top);
            if(elem.getBoundingClientRect().top >= viewport) {
                elem.classList.add('zoomInDown');
            }
        });
    }

    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 800);

    window.onscroll = function() {
        animateContent();
    };
};

