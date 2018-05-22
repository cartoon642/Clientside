function meme(a) {
    if  (document.getElementById(a).style.color == "red"){
               document.getElementById(a).style.color = "purple";
    }
    else{
        document.getElementById(a).style.color = "red";
    }
        
}
var bc = 0;
document.getElementById("buttonclick").innerHTML="button clicks: "+bc;
function meme2() {
    var x = document.getElementById("list");
    var y = document.getElementById("hide");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if (y.textContent =="hide"){
        y.textContent = "show"
        bc++
    }
    else{
        y.textContent = "hide"
        bc++
    }
    if (bc == 5){
        document.getElementById("buttonstate").innerHTML="you seem to like this button";
    }
        if (bc == 15){
        document.getElementById("buttonstate").innerHTML="Stop clicking the fucking button AAAAAAAAAAAA";
    }

    document.getElementById("buttonclick").innerHTML="button clicks: "+bc;
}