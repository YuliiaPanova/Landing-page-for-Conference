$(document).ready(function(){
    var $menu = $("#menu"),
        $header_width =$("#header").height();
    $(window).scroll(function(){
        if ( $(this).scrollTop() > $header_width && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= $header_width && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });

    $('.hidden_iframe').load(function() {
        $('.g-form-name').val('');
        $('.g-form-email').val('');
    });

    function initialize() {
        var latlng = new google.maps.LatLng(50.009996, 36.31825);
        var settings = {
            zoom: 15,
            scrollwheel: false,
            center: latlng,
            mapTypeControl: true,
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: true,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('google-map'),  settings);
        var companyLogo = new google.maps.MarkerImage('../images/Barbul.png',
        new google.maps.Size(100,60),
            new google.maps.Point(0,0),
            new google.maps.Point(50,60)
        );
        var companyPos = new google.maps.LatLng(50.009996, 36.31825);
        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map,
            title:'Radmir'
        });
    }
    initialize()
});

