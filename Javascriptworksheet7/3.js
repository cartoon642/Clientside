function meme1(){
    var deg = document.getElementById("degreesinput").value;
    var fah = document.getElementById("fahinput").value;
    
    if((deg == 0) && !(fah ==0)){
      var  y = (fah-32)*(0.5556);
        document.getElementById("degreesinput").value = y;
        
    }
     if((fah == 0) && !(deg==0)){
      var  y = (deg*1.8)+32
        document.getElementById("fahinput").value = y;
        
    }
    if(fah == 0 && deg == 0){
      alert("enter something pls");
        
    }
     if(!(fah == 0) && !(deg == 0)){
      alert("not in both pls");
        document.getElementById("fahinput").value = null;
        document.getElementById("degreesinput").value = null;
    }
    if(!(isNaN(fah)) || !(isNaN(deg))){
      alert("Enter a number");
        document.getElementById("fahinput").value = null;
        document.getElementById("degreesinput").value = null;
    }
}