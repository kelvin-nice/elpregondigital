$(".submenu").click(function() {
    $(this).children("ol").slideToggle();
})

$("ol").click(function(j) {
    j.stopPropagation();
})