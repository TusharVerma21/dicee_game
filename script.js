randNo();
var rand1, rand2;
function randNo(){
  rand1 = Math.floor(Math.random() * 6 + 1);
  rand2 = Math.floor(Math.random() * 6 + 1);
  //console.log(rand1, rand2);
}

var main_heading = document.querySelector(".container h1");

var player1Dice = document.getElementsByClassName("img1")[0];
var player2Dice = document.getElementsByClassName("img2")[0];


if(rand1 > rand2){
  main_heading.textContent = "⛳Player 1 Wins!";

}
else if(rand1 < rand2){
  main_heading.textContent = "Player 2 Wins!⛳";

}
else{
  main_heading.textContent = "Draw!";
}

player1Dice.setAttribute("src","images/dice"+rand1+".png");
player2Dice.setAttribute("src","images/dice"+rand2+".png");
