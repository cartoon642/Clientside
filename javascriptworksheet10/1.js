var meme = prompt("enter 1 if you want ascending and -1 if you want decending", "1");
var food = ["Banana", "Cereal", "Eggs","Milk","Potatoes"];

if (meme == "1"){
    food.sort();
    for (i = 0; i < food.length; i++) { 
    document.getElementById("meme").innerHTML +=  food[i] + "<br>";
    }
    
}
else if(meme == -1){
    food.sort();
    food.reverse();
    for (i = 0; i < food.length; i++) { 
    document.getElementById("meme").innerHTML +=  food[i] + "<br>";
    }
}
else{
    document.getElementById("meme").innerHTML = "invalid input";
    
}
var answer;
var search;
function meme1(){
    answer ="";
    var x = document.getElementById("search").value;
        for (i = 0; i < food.length; i++){
            if (food[i].toLowerCase() == x.toLowerCase()){
                answer = i;
            }
        }
    if (!(answer == "")){
        document.getElementById("meme2").innerHTML = x +" was found at index "+answer;
    }
    else{
         document.getElementById("meme2").innerHTML = "invalid input";
    }
}
function meme2(){
    var x = document.getElementById("meme3").value;
    splitandreverse(x);
}

function splitandreverse(x){
    document.getElementById("meme4").innerHTML = ""
    var y = x.split(",");
    y.reverse();
    
    for (i = 0; i < y.length; i++) { 
         y[i] = y[i].trim();
    }
    alert(y.join(" ").trim());
     for (i = 0; i < y.length; i++) { 
        y[i] = y[i].trim();
    document.getElementById("meme4").innerHTML +=  y[i] + "<br>";
    }
    
}