//slide up scripting //
$('.scroll-bar-btn').click(function(){
    $('html').animate({scrollTop: 0});
});
// Typing Animation Script//
var typed = new Typed(".typing",{
    strings:["Engineer","YouTuber","Developer","Blogger"],
    typeSpeed: 100,
    backSpeed:80,
    loop: true
});
//toggle menu/navbar script//
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});