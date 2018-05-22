 var person = prompt("Please enter your name", "");
if(person != ""){
   alert("hello " +person);
}
else{
    alert("Hello Valued Customer");
}


function meme(){
    var check = 0;
    var input = document.getElementById("input").value;
for (var i = 0; i < input.length; i++) {
  if (!(input.match(/^[0-9a-z]+$/))){
      check = 1;
      }    
}
    if (check ==1){
        alert("wrong input");
    }
    else{
        alert("nice");
    }
}