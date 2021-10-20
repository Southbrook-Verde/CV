

smoothScroll = function() {
    var element = document.getElementById( 'div2' );
    element.scrollIntoView({behavior: "smooth"});
}

function aboutMe() {
    var screen = document.getElementById("screen");
    var screenGrid = document.getElementById("screenGrid");
    var classes = screen.classList;
    var gridClasses = screenGrid.classList;
    classes.add("text-left", "pl-2");
    while (document.getElementById("screen").classList("text-left", "ml-5") === true) {
        gridClasses.add("grid-col-2", "grid")
    }
}