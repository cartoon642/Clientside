
    var txt;
    var person = prompt("Please enter your name:", "");
    var ID = parseInt(prompt("Please enter your ID:", ""));
    alert ("your ID number is "+ID+ " and is type"+typeof ID);
    txt = "Welcome to our page " + person+ "("+ID+")";

    document.getElementById("title").innerHTML = txt;


var s1 = "99 bottles of beer on the wall. 99 bottles of beer";
var s2 ="There are many people who are taking the bottles off the wall";
var s3 ="3.50 euro is the price of each beer.";
var s4="there are 26 bottles left on the wall. These bottles are from 3 different types of brands"
document.getElementById("string1").innerHTML += s1;
document.getElementById("string2").innerHTML += s2;
document.getElementById("string3").innerHTML += s3;
document.getElementById("string4").innerHTML += s4;
var y = document.getElementById("fahinput");

function meme(){
    var x = document.getElementById("degreesinput").value;
    var y = x*2;
    document.getElementById("fahinput").value = y;

}
function meme1(){
    var x = document.getElementById("fahinput").value;
    var y = x/2;
    document.getElementById("degreesinput").value = y;

}
function meme2(){
    
    var y = parseInt(s1);
    
    document.getElementById("string1text").innerHTML = y;

}
function meme3(){
    
    var y = parseInt(s2);
    
    document.getElementById("string2text").innerHTML = y;

}
function meme4(){
    
    var y = parseInt(s3);

    document.getElementById("string3text").innerHTML = y;

}
function meme5(){
   
    var y = parseFloat(s3);
    
    document.getElementById("string3text").innerHTML = y;

}
function meme6(){
    
    var y = parseInt(s4);
    
    document.getElementById("string4text").innerHTML = y;

}
