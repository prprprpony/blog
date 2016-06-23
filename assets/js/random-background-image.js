(function () {
    var num_bg = 6;
    var n = Math.floor(Math.random() * num_bg).toString();
    var base_url = window.location.origin + '/blog/';
    var img_url = 'url(' + base_url + 'assets/css/images/overlay.png), url(' + base_url + 'images/backgrounds/bg' + n + '.svg)';
    ["header", "footer"].forEach(function (s) {
        document.getElementById(s).style.backgroundImage = img_url;
    });
})();
