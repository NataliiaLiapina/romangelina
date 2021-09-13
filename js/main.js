var countDownDate = new Date("June 26, 2021 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    //if (distance < 0) {
    //    clearInterval(x);
    //    document.getElementById("days").innerHTML = "0";
    //    document.getElementById("hours").innerHTML = "0";
    //    document.getElementById("minutes").innerHTML = "0";
    //    document.getElementById("seconds").innerHTML = "0";
    //}
}, 1000);



var mobile_menu = document.getElementById("burger");
mobile_menu.addEventListener("click", function (event) {
    event.preventDefault();
    $(".hidden-menu").css('opacity', '1').css('visibility', 'visible');
});

var close_menu = document.getElementById("close");
close_menu.addEventListener("click", function (event) {
    event.preventDefault();
    $(".hidden-menu").css('visibility', 'hidden').css('opacity', '0');
});





jQuery(function($) {

    // const nav = $('.menu');
    const link = $('body');

    link.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top 
        }, 800);
        $(".hidden-menu").css('visibility', 'hidden').css('opacity', '0');
    });

});



