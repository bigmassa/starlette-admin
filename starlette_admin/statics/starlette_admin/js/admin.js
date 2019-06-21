document.addEventListener("DOMContentLoaded", function(){
    
    var header = document.getElementsByTagName('header')[0];

    // scrolling variables
    var scrolling = false,
    previousTop = 0,
    scrollDelta = 10,
    scrollOffset = 150;

    window.addEventListener('scroll', function() {
        if( !scrolling ) {
            scrolling = true;
            (!window.requestAnimationFrame) ? setTimeout(autoHideHeader, 250) : requestAnimationFrame(autoHideHeader);
        }
    });

    function autoHideHeader() {
        var currentTop = window.scrollY;
        var isNavOpen = document.body.classList.contains('nav-open');
        if (!isNavOpen) {
            if (previousTop - currentTop > scrollDelta) {
                // if scrolling up...
                header.classList.remove('up');
            } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
                // if scrolling down...
                header.classList.add('up');
            }
        }
        previousTop = currentTop;
        scrolling = false;
    }
    
    // toggle menu
    var togglemenuclosed = document.querySelector('header .toggle-menu');
    var togglemenuopened = document.querySelector('nav .toggle-menu');
    var menu = document.querySelector('.menu');

    togglemenuclosed.onclick = function(){
        menu.classList.toggle('active');
    }

    togglemenuopened.onclick = function(){
        menu.classList.toggle('active');
    }

});