

smoothScroll = function() {
    var element = document.getElementById( 'div2' );
    element.scrollIntoView({behavior: "smooth"});
}

function aboutMe(screen) {
    var screen = document.getElementById("screenContainer3");
    var classes = screen.classList;
    classes.toggle("laptop:grid");
}