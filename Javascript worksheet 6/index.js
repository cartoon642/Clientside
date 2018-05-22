
    var num1 = parseInt(prompt("Please enter a number", ""));
    var num2 = parseInt(prompt("Please enter another number", ""));
    
   function meme(){
     document.getElementById("Addition").innerHTML= num1+num2;   
   }
 function meme1(){
     document.getElementById("Subtraction").innerHTML= num1-num2;   
   }
 function meme2(){
     document.getElementById("Multiplication").innerHTML= num1*num2;   
   }
 function meme3(){
     document.getElementById("Division").innerHTML= num1/num2;   
   }
 function meme4(){
     document.getElementById("Power").innerHTML= Math.pow(num1, num2);   
   }
 function meme5(){
     document.getElementById("Modulus").innerHTML= num1%num2;   
   }
function meme6(){
    document.getElementById("Area").innerHTML= num1*num2;  
}
 function meme7(){
     document.getElementById("Square").innerHTML= num1+num2+num1+num2;   
   }