$(document).ready(function() {
    $(".menu").click(function() {
        $(this).toggleClass("ativo");
        $(".nav-menu").toggleClass("ativo");
    });
});