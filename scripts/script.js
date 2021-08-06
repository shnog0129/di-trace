//It's too sensitive. Need to ignite after user stop the mouse.
function hideMenuByWindowSize() {　
    let windowSize = screen.width;
    if (windowSize > 1101) {
        document.getElementById("hide1101").style.display = "block";
        document.getElementById("hide990").style.display = "block";
    } else if (windowSize < 1101 && windowSize > 900) {
        document.getElementById("hide1101").style.display = "none";
        document.getElementById("hide990").style.display = "block";
    } else if (windowSize < 900) {
    document.getElementById("hide1101").style.display = "none";
    document.getElementById("hide990").style.display = "none";
    }
}

window.onresize = hideMenuByWindowSize;


$(function() {
  $(".triangle").click(function() {
    var toggleMenu = $("+.dropdown",this);
    toggleMenu.toggle();
    $(".dropdown").not(toggleMenu).slideup(0);
    $(".dropdown:visible").prev().css("background", "#283948");
    $(".dropdown:hidden").prev().css("background", "#2e4153");
    return false;
  });
});

