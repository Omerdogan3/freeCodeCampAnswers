$(document).ready(function(){
  var long;
  var lat;
 
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    
    $("#data").html("latitude: " + lat + "<br>longitude: " + long);
  });
  } 
 
  var api="http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=78aD5e3a27e18e06c43b32cd170e61bb";  
    
    $.getJSON(api,function(data){
      
    });
});