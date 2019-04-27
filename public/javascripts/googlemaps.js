initMap();
function initMap() {
    //options
    var options={
        zoom:7,
        center:{lat:28.5229 , lng:77.3649}
    }
    //map
    var map=new google.maps.Map(document.getElementById('map'),options);
        google.maps.event.addListener(map,'click',
        function(event){
            addMarker({coords:event.LatLng})
        });

        //heatmap
    
      //button heatmap
    //   function toggleHeatmap() {
    //     heatmap.setMap(heatmap.getMap()  map);
    //   }

    //   function getPoints() {
    //     var location=[];
    //     for(var i = 0; i < data.length; i++) {
    //         var obj = data[i];
    //         location[i] = {location: new google.maps.LatLng(obj.coords.lat, obj.coords.lng)}
    //     }
    //     return location;
    // }
    // //add marker function
    // for(var i=0;i<data.length;++i){
    //     addMarker(data[i]);
    // }

    // function addMarker(props){
    //     var marker=new google.maps.Marker({
    //         position:props.coords,
    //         map:map
    //     });
    //     if(props.iconImage){
    //         marker.setIcon(props.iconImage);
    //     }
    //     if(props.message){
    //         var infoWindow=new google.maps.InfoWindow({
    //             content:props.message
    //         })
    //         marker.addListener('click',function(){
    //             infoWindow.open(map,marker);
    //             console.log(props.id);

    //         })
    //     }
    // }
    
    

//     var input = document.getElementById('pac-input');
//     var searchBox = new google.maps.places.SearchBox(input);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//     // Bias the SearchBox results towards current map's viewport.
//     map.addListener('bounds_changed', function() {
//     searchBox.setBounds(map.getBounds());
//     });

//     searchBox.addListener('places_changed', function() {
//     var places = searchBox.getPlaces();

//     if (places.length == 0) {
//         return;
//     }
//     var bounds = new google.maps.LatLngBounds();
//     places.forEach(function(place) {
//         if (!place.geometry) {
//         console.log("Returned place contains no geometry");
//         return;
//         }
    

//         if (place.geometry.viewport) {
//         bounds.union(place.geometry.viewport);
//         } else {
//         bounds.extend(place.geometry.location);
//         }
//     });
//     map.fitBounds(bounds);
//     });
}

    