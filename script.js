// var scrollUp = wondow.pageYOffset;
// window.onscroll = function ()
// {
//   var currentScrollUp = window.scrollY;
//   if (scrollUp > currentScrollUp) 
//     {
//         document.getElementById("ait-nav").style.top = "0";
//     } 
//   else
//    {
//         document.getElementById("ait-nav").style.top = "-50px";
//    }
//   scrollUp = currentScrollUp;
// }


let ScrollTop = 0;
    const navbar = document.getElementById('ait-nav');

    // scroll event is fired when doc is scroll
    window.addEventListener('scroll', function () {
        let currentScrollTop = window.scrollY;

        if (currentScrollTop > ScrollTop) {
            navbar.style.transform = 'translateY(-100%)';
        } else {

            navbar.style.transform = 'translateY(0)';
        }

        ScrollTop = currentScrollTop;
    });