// Credit - Code inspiration borrowed from "Responsive Navigation Menu Bar with HTML CSS & Javascript | CSS Flexbox"
// Tutorial by CodingNepal- https://www.youtube.com/watch?v=mbDNrvKLAGM

// jQuery show and hide active links and toggle icon
$(document).ready(function () {
    $(".nav-btn").click(function () {
        $(".nav-link").toggleClass("show");
        $("ul li").toggleClass("hide");
    });
});

// Credit - Code inspiration borrowed from the content of "JQuery Effects - Challenge 3" by Code Institute course

// jQuery show and hide effects for buttons at Trips section
$(".destination").hide();
$(".trip").click(function () {
    $(this).siblings(".destination").slideToggle(500);
});