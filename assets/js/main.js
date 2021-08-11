function closeVenobox() {
    $(".venobox-custom").css("display", "block");
}
$(".venobox-custom").click(function () {
    $(this).css("display", "none");
})
var init = $('.venobox').venobox({
    spinColor: '#3bf46a',
    spinner: 'cube-grid',
    titleattr: 'data-title',
    titleColor: '#3bf46a',
    titleBackground: 'transparent'
});
$(document).on('click', '.vbox-close', function (e) {
    init.VBclose();
    closeVenobox();
});
$(document).on('click', '.vbox-overlay', function (e) {
    init.VBclose();
    closeVenobox();
});