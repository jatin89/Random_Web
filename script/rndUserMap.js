$(document).ready(function () {
    var map;
    var loc;
    var geocoder;

    $.getJSON("https://randomuser.me/api/1.1/", function (data) {
        $.each(data.results, function (item, val) {
         	//alert(this.name.first + "HEy");
			$("#card .name").append(this.name.title + " " + this.name.first + " " + this.name.last);
            $("#card .email").append(this.email);
            $("#card .addr1").append(this.location.street + "; " + this.location.city);
            $("#card .addr2").append(this.location.state + "; " + this.location.postcode);
            $("#card .phone").append(this.phone);
            $("#card .cell").append(this.cell);
            $("#card .img").attr("src", this.picture.large);
            loc = this.location.street + "; " + this.location.city + "; " + this.location.state + "; " + this.location.postcode;
            //alert(loc);
            initMap(loc);
        });
    });

    function initMap(loc) {
        if (!loc) {
            return false
        }
        console.log(loc);
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            center: {
                lat: 52.14,
                lng: -106.64
            }
        });
        geocoder = new google.maps.Geocoder();
        geocodeAddress(geocoder, map);
    }
	
	function geocodeAddress(geocoder, resultsMap) {
       alert(loc);
	    var address = loc;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location,
			  title: "You're at:" + address
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }


});