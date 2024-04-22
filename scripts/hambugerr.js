$(document).ready(function() {
    $("#hbutton").click(function() {
        console.log('Toggle-button clicked!');
        if ($("#navmenu").hasClass("hidden")) {
            $("#navmenu").removeClass("hidden");
        } else {
            $("#navmenu").addClass("hidden");
        }
    });

    $(window).resize(function() {
        if ($(window).width() < 600) {
            $("#hbutton").removeClass("hidden");
            $("#navmenu").addClass("hidden");

        } else {
             $("#navmenu").removeClass("hidden");
            $("#hbutton").addClass("hidden");
        }
    });
});
