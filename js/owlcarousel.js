$(document).ready(function(){

    function owlSetImages(event) {
        var element = event.target
        var images = $(element).children()
        images.each(function (index,e) {
            var e = $(e)
            var image = e.data().background
            if (image){
                e.css("background-image", "url('"+image+"')")
                e.css("background-size", "cover")
                e.css("background-position", "bottom")
                e.css("height", "100%")
            }
        })
    }

    var $owl = $(".owl-carousel")

    $owl.on('initialize.owl.carousel', function (event) {
        owlSetImages(event)
    })

    $owl.on('initialized.owl.carousel', function (event) {
        if ( $(event.target).data().fullHeight ){
            $(".owl-item").css("height", "100vh")
        }
    })

    $owl.on('resized.owl.carousel', function(event) {
        owlSetImages(event)
    })

    $owl.owlCarousel({
        items: 1,
        pagination : true,
    })
});