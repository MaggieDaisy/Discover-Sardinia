// Credit - Code inspiration borrowed from "Responsive Navigation Menu Bar with HTML CSS & Javascript | CSS Flexbox" Tutorial by CodingNepal- https://www.youtube.com/watch?v=mbDNrvKLAGM

// jQuery show and hide active link on toggle icon
$(document).ready(function () {
    $(".nav-btn").click(function () {
        $(".nav-link").toggleClass("show");
        $("ul li").toggleClass("hide");
    });
});

// Credit - Code inspiration borrowed from the content of "JQuery Effects - Challenge 3" by Code Institute course- https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/b99394c03fb342ed96e82caa5adef426/cb6592e199ef45d5a3db4cf83691b70f/?child=first

// jQuery show and hide effects for buttons at Trips section
var tripElement = $("#des-1");
tripElement.hide();
$("#button-trip-1").click(function () {
    $("#des-1").slideToggle(500);
});

var tripElement = $("#des-2");
tripElement.hide();
$("#button-trip-2").click(function () {
    $("#des-2").slideToggle(500);
});

var tripElement = $("#des-3");
tripElement.hide();
$("#button-trip-3").click(function () {
    $("#des-3").slideToggle(500);
});