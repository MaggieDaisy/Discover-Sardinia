// Show and/or hide active class on toggle icon 

$(document).ready(function(){
$('.nav-btn').click(function(){
    $('.nav-link').toggleClass("show");
    $('ul li').toggleClass("hide");
});
});