/* Start Klassenänderung */
$(window).on('scroll', function(){
     if ( $(window).scrollTop() > 50) {
         //Navigation
         $('nav.navbar').addClass('bg-white');
         //Back to top button
         $('#backtotopbutton').addClass('d-inline');
     } else {
         //Navigation back
         $('nav.navbar').removeClass('bg-white');
         //backtoptopbutton
         $('#backtotopbutton').removeClass('d-inline');
     }
});

/* Ende KLassenänderung */


/* Start Smooth Scroll */
//Sicherstellen dass alle DOM-ELEMENTE geladen sind

$(document).ready(function() {
$('a.smooth').on('click', function(event) {
    if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },1000,function(){
            window.location.hash = hash;
        });
    }
});
});
/* Ende smooth scroll */