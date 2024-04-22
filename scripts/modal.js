$(document).ready(function() {
    $("#mmeet").click(function() {
        console.log('Meet button clicked!');
        $("#modal").removeClass("hidden"); // Updated selector to target the modal
    });

    $("#eexit").click(function() {
        console.log('Exit button clicked!');
        $("#modal").addClass("hidden"); // Updated selector to target the modal
    });
});
