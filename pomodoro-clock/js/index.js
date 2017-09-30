$(document).ready(function(){
  var breakLen =5;
  var sessionLen = 25;
  var startSession=false;
  
function countdown(element, minutes, seconds) {
    // set time for the particular countdown
    var time = minutes*60 + seconds;
    var interval = setInterval(function() {
        var el = document.getElementById(element);
        // if the time is 0 then end the counter
        if (time <= 0) {
            var text = "Now Take " + breakLen + " Minutes Break";
            el.innerHTML = text;
            setTimeout(function() {
                countdown('clock', 0, 5);
            }, 2000);
            clearInterval(interval);
            return;
        }
        var minutes = Math.floor( time / 60 );
        if (minutes < 10) minutes = "0" + minutes;
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds; 
        var text = minutes + ':' + seconds;
        el.innerHTML = text;
        time--;
    }, 1000);
}
  
  
  function setBreakValue(breakLen){
    $("#break-num").html(breakLen);
  }
  
  function setSessionValue(sessionLen){
    $("#session-num").html(sessionLen);
  }
  
  function update(){
    setBreakValue(breakLen);
    setSessionValue(sessionLen);
  }
  
  
  $("a").on("click", function(){
    if(this.id==="break-"){
      breakLen-=5;
      setBreakValue(breakLen-5);
    }else if(this.id==="break+"){
      breakLen+=5;
      setBreakValue(breakLen+5);
    }else if(this.id==="-"){
      sessionLen-=5;
      setSessionValue(sessionLen-5);
    }else if(this.id==="+"){
      sessionLen+=5;
      setSessionValue(sessionLen+5);
    }else if(this.id==="Start-Session" && startSession === true){
      $("#Start-Session").html("Start Session");
      startSession = false;
     
    }
    else if(this.id==="Start-Session" && startSession === false){
      countdown('clock', sessionLen, 0);
      $("#Start-Session").html("Stop Session");
      startSession = true;
    }
  });
  
  
});