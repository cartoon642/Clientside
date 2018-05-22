function Persons(Fullname, email, age,id) {
   this.fullname = Fullname;
    this.email = email;
    this.age = age;
    this.id = id;
   
    
}

var persons = new Array();

function insert(){
    var checkid = 0;
   var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var id = document.getElementById("id").value;
   
    if (name == "" || email == "" || String(age) == "" || id == ""){
        alert("please enter all fields")
    }
    else{
    var person = new Persons(name,email,age,id);
    if(persons.length == 0){
        persons[0]=person;
        
    }
        else{
            for (var i = 0; i < persons.length; i++) {
            if(persons[i].id == id){
                checkid = 1
                alert("id already inserted")
            }

            }
            if (checkid==0){
                    persons.push(person);
            }
            
}
}
}
