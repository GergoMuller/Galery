$(document).ready(function () {
    $(document).scroll(function () {
        var nav = $('#nav');
        nav.toggleClass('nav2', $(this).scrollTop() > nav.height());
    });
});
//# sourceMappingURL=main-dommod.js.map