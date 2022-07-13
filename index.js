var random1=Math.floor(Math.random()*6)+1;

var randomimg1="dice"+random1+".png";

var randomimgsrc1="images/"+randomimg1;

document.querySelectorAll("img")[0].setAttribute("src",randomimgsrc1);
/*if(random1==1){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}
else if(random1==2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
else if(random1==3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
else if(random1==4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
else if(random1==5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
else{
    document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
}

var random2=Math.floor(Math.random()*6)+1;
if(random2==1){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
}
else if(random2==2){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
}
else if(random2==3){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
}
else if(random2==4){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
}
else if(random2==5){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
}
else{
    document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
}*/
var random2=Math.floor(Math.random()*6)+1;

var randomimgsrc2="images/dice"+random2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Player1 Wins.";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player2 Wins.";
}
else{
    document.querySelector("h1").innerHTML="It's a draw.";
}