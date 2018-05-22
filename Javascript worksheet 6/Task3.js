var a = "Many of life's failures are people who did not realize how close they were to success when they gave up";
 document.getElementById("word").innerHTML= a;
var d = new Date();
var dd = d.getDate();
var mm = d.getMonth()+1;
var yy = d.getFullYear();

var x = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
var y = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
function meme(){
   var b = document.getElementById("text").value;
    meme2(b);
    
}
function meme2(b){
    document.getElementById("position").innerHTML= a.indexOf(b);
}
window.onload = function() {
document.getElementById("dmy").innerHTML= "day: "+ d.getDate()+" Month: "+ parseInt( d.getMonth() +1) + " Year: "+d.getFullYear();
document.getElementById("time").innerHTML= "time: (number of milliseconds since 1970/01/01) "+ d.getTime();
document.getElementById("df1").innerHTML= "Date Format 1: "+dd+"/"+mm+"/"+yy+" "+x;
document.getElementById("df2").innerHTML= "Date Format 2: "+dd+"/"+mm+"/"+yy;
document.getElementById("df3").innerHTML= "time Format 1: "+x;
document.getElementById("df4").innerHTML= "time Format 2: "+y;
};