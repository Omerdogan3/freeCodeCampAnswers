$(document).ready(function(){
  //Defaults player's turn to x
  var turn="X";
  //Array stores values that check for a winner
  var turns=["#","#","#","#","#","#","#","#","#"];
  //Default computer
  var computersTurn="O";
  //Keeps track if it is the computer's turn
  var gameOn = false;
  //Keeps track of computers turn so no loop
  var count=0;
  
  //Change player's turn to X and computer to O
  $("#turnX").click(function(){
    turn = "O";
    computersTurn = "X";
    $("#turnX").removeClass("btn-primary");
    $("#turnO").addClass("btn-primary");
  });
  
  $("#turnO").click(function(){
    turn = "X";
    computersTurn = "O";
    $("#turnO").removeClass("btn-primary");
    $("#turnX").addClass("btn-primary");
  });
  
  $("#Reset").click(reset);
  
  
  
  function playerTurn(turn,id){
    var spotTaken = $("#" + id).text();
    if(spotTaken === "#"){
      count++;
      turns[id] = turn;
      $("#"+ id).text(turn);
      winCondition(turns , turn);
    }
  }
  
  function winCondition(turnArray , CurrentTurn){
    /*empty
    

    */
    }
  
  $(".tic").click(function(){
      var slot = $(this).attr('id');
      playerTurn(turn,slot);
  });
  
  function reset(){
    turns = turns=["#","#","#","#","#","#","#","#","#"];
    count =0;
    $(".tic").text("#");
    gameOn = true;
  }
});