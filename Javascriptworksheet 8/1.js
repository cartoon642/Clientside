var a = "Many of life's failures are people who did not realize how close they were to success when they gave up";
 document.getElementById("word").innerHTML= a;
var d = new Date();
var dd = d.getDate();
var mm = d.getMonth()+1;
var yy = d.getFullYear();
var Month = meme4(mm);
 var text;
function meme4(a){
   
switch (a) {
    case 1:
        text = "January";
        break; 
    case 2:
        text = "February";
        break; 
    case 3:
        text = "March";
        break; 
    case 4:
        text = "April";
        break; 
    case 5:
        text = "May";
        break; 
    case 6:
        text = "June";
        break; 
    case 7:
        text = "July";
        break; 
    case 8:
        text = "August";
        break; 
    case 9:
        text = "September";
        break; 
    case 10:
        text = "October";
        break; 
    case 11:
        text = "November";
        break; 
    case 12:
        text = "December";
        break; 
    default: 
        text = "Looking forward to the Weekend";
    
    
}
    
}

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
document.getElementById("dmy").innerHTML= "day: "+ d.getDate()+" Month: "+ text + " Year: "+d.getFullYear();
document.getElementById("time").innerHTML= "time: (number of milliseconds since 1970/01/01) "+ d.getTime();
document.getElementById("df1").innerHTML= "Date Format 1: "+dd+"/"+mm+"/"+yy+" "+x;
document.getElementById("df2").innerHTML= "Date Format 2: "+dd+"/"+mm+"/"+yy;
document.getElementById("df3").innerHTML= "time Format 1: "+x;
document.getElementById("df4").innerHTML= "time Format 2: "+y;
};