$(document).ready(function(){
    //Get freecodecamp stream info and status api call
 

  $.ajax({
    type:"GET",
    url:"https://api.twitch.tv/kraken/streams/riotgamesturkish",
    headers:{
      'Client-ID': 'ww6gl5v5d3e3d3bw8lwp98qi0zg5r3'
    },
    success:function(data1){
      if(data1.stream ==null){
        $("#fccStatus").html("OFFLINE!");
      }
      else{
        $("#fccStatus").html("ONLINE!");
      }
    } 
  });
  
  
  /* $.ajax({
    type:"GET",
    url:"https://api.twitch.tv/kraken/streams/freecodecamp/follows/channels",
    headers:{
      "Client-ID":"ww6gl5v5d3e3d3bw8lwp98qi0zg5r3"
    },
    success:function(data2){
      for(var i=0; I<data2.follows.lenght; ++i){
        console.log(displayName);
        var displayName = data2.follows[i].channel.display_name;
        var logo = data2.follows[i].channel.logo;
        var status = data2.follows[i].channel.status;
        if(logo==null){   logo="http://vignette3.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png/revision/latest?cb=20130527163652";
        }
        
        $("#followerInfo").prepend("<div class = 'row'>" + "<div class='col-md-4'>" + 
              "<img src='" + logo + "'>" + "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }
    }
  });
   */
  
});