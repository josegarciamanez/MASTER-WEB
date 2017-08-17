// Activación Menú
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});
// Desplazamiento lento de página
$('a.scroll').click(function(e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});
// NAVBAR CAMBIO COLOR 
$(window).scroll(function() {
    if ($("#menu").offset().top > 70) {
        $("#menu").removeClass("bg-transparent");
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
        $("#menu").addClass("bg-transparent");
    }
});
$(window).scroll(function() {
    if ($("#menu").offset().top > 70) {
        $("#menu").removeClass("navbar-light");
        $("#menu").addClass("navbar-dark");
    } else {
        $("#menu").removeClass("navbar-dark");
        $("#menu").addClass("navbar-light");
    }
});
/*// INICIO GALERÍA FOTOGRÁFICA 
jQuery("#gallery").unitegallery({
    tile_enable_image_effect: true,
    tile_enable_overlay: false,
    tile_enable_icons: false,
});
// INICIO VIDEOS 
jQuery("#gallery2").unitegallery({
    gallery_theme: "video"
});*/

// ACTIVAR PARALLAX
(function($) {
    $('.parallax').parallaxBackground();
})(jQuery);