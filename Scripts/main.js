(function () {
       

    var loadImageCache = {}
    var loadImage = function (imageSrc) {
        if (typeof loadImageCache[imageSrc] === "undefined") {
            deferred = $.Deferred();

            preloader = new Image();
            preloader.onload = function () { deferred.resolve(this.src) };
            preloader.onerror = function () { deferred.reject(this.src) };
            preloader.src = imageSrc;

            loadImageCache[imageSrc] = deferred;
        }

        return loadImageCache[imageSrc];
    }

    loadImage("../Images/galaxy.jpg").then(function (url) {
        $("#yritis").attr("src", "../Images/galaxy.jpg");
        imageObj = new Image();
        imagesArray = new Array();
        imagesArray[0] = "../Images/demo1.jpg";
        imagesArray[1] = "../Images/bg_parallax.jpg";

        for (var i = 0; i < 2; i++) {
            imageObj.src = imagesArray[i];
        };

        $("#palvelut").attr("src", "../Images/demo1.jpg");

        $('.sideBar a').click(function () {
            $.scrollTo(this.hash, 1500, { easing: 'swing' });
            return false;
        });
    });

    

})();