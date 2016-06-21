(function ($) {
    var num_bg = 6;
    var n = Math.floor(Math.random() * num_bg).toString();
    ["#header", "#footer"].forEach(function (s) {
        $(s).css("background-image", 'url(images/overlay.png), url(images/backgrounds/bg' + n + '.svg)');
    });
})(jQuery);
