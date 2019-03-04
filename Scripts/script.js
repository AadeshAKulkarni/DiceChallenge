function RoleTheDice(){

var player1=document.getElementById("player1");
var random1=Math.floor((Math.random	()*100 %6)) +1;
player1.setAttribute("src","Images/dice"+random1+".png");

var player2=document.getElementById("player2");
var random2=Math.floor((Math.random	()*100 %6)) +1;
player2.setAttribute("src","Images/dice"+random2+".png");

var result=document.getElementById("result");
if(random1>random2){
  result.innerHTML="Ragini Wins";
}
else if(random1<random2){
result.innerHTML="Aadesh Wins";
}
else
{
result.innerHTML="Its a draw. Refresh to Restart.";
}

}
