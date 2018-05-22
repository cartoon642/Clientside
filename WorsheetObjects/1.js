var car1 = new Car("fiat", "Cinquecento", "white",2017);

document.getElementById("make").innerHTML= car1.make;
document.getElementById("model").innerHTML= car1.model;
document.getElementById("colour").innerHTML= car1.colour;
document.getElementById("year").innerHTML= car1.year;

    var el1 = document.getElementById("start");
el1.addEventListener('click', function(){car1.start();} ,false);
var el2 = document.getElementById("drive");
el2.addEventListener('click', function(){car1.drive();} ,false);
var el3 = document.getElementById("break");
el3.addEventListener('click', car1.break ,false);
var el4 = document.getElementById("stop");
el4.addEventListener('click', car1.stop ,false);




function Car(make, model, colour,year) {
   this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
    this.started= false;
    
    this.start =function(){
        this.started=true;
    };
     this.drive =function(){
        if (this.started){
            alert("vrooom");
        }
         else{
             alert("start car first");
         }
    };
    this.break =function(){
        if (this.started){
            alert("screeeeeech");
        }
         else{
             alert("start car first");
         }
    };
     this.stop =function(){
        this.started=false;
    };
    
}





