$(document).ready(function(){
  getQuote();
  var randomQuote;
  var randomNumber;
  var randomAuthor;
  var authors;
  
  function getQuote(){
    var quotes=["Teachers are the one and only people who save nations.", "Helly, Sea!" , "Hello, Sky!"];
     authors=["-MKA", "-Author2", "-Author3"];
    
    randomNumber = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNumber];
    randomAuthor = authors[randomNumber];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
    
  $("#newQuote").on("click",function(){
      getQuote();
    });
  
  $("#tweet").on("click",function(){
      window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + randomAuthor);
    });
});