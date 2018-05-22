    var num1 = parseFloat(prompt("Please enter a fractional number", ""));
document.getElementById("title").innerHTML= "the number you entered was "+ num1;
document.getElementById("parse").innerHTML= parseInt(num1);
document.getElementById("ceil").innerHTML= Math.ceil(num1);
document.getElementById("floor").innerHTML= Math.floor(num1);
document.getElementById("round").innerHTML= Math.round(num1);