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

    loadImage("Images/yritys_1280x850.jpg").then(function (url) {
        $("#yritys").attr("src", "Images/yritys_1280x850.jpg");
        imageObj = new Image();
        imagesArray = new Array();
        imagesArray[0,1] = "Images/palvelut_1280x850.jpg";
		imagesArray[2] = "Images/referenssit_1280x850.jpg";
		imagesArray[3] = "Images/yhteys_1280x850.jpg";

        for (var i = 0; i < 2; i++) {
            imageObj.src = imagesArray[i];
        };

        $("#palvelut, #palvelut2").attr("src", "Images/palvelut_1280x850.jpg");
		$("#referenssit").attr("src", "Images/referenssit_1280x850.jpg");
		$("#yhteys").attr("src", "Images/yhteys_1280x850.jpg");
		
		
        $('.sideBar a').click(function () {
			
			if($('.sideBar li').hasClass('active')) {		
				$('.sideBar li').removeClass('active');
			} 	
				
			$(this).parent('li').addClass('active');
            $.scrollTo(this.hash, 1500, { easing: 'swing' });
            return false;
        });

        
    });

    $(window).scroll(function () {
        //alert(2);
        var $win = $(window);
        $('.sideBar').css('left', 180 - $win.scrollLeft());
    });

})();