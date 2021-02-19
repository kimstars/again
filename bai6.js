//oblject prototypes
//kế thừa phương thức thuộc tính từ prototype


function Person(id, name, age){
    this.id = id; 
    this.name = name;
    this.age = age;
    
    this.info = function(){
        console.log(this.id + "- name : " + this.name + " - " + this.age)
    }
    this.changeName = (newName) => (this.name = newName)
}

var person1 = new Person(1,"A", 20)

person1.info();
person1.changeName("kiet");
person1.info();
//cach 2
// person1.address = "hanoi";


Person.prototype.address = "Hanoi";

Person.prototype.info1 = function(address) {
    console.log( "My name : "+ this.name );
    console.log( "My old address : "+ this.address);
    this.address = address;
    console.log("My address : "+ this.address);
}

person1.info1("ha long");

var exe = 0;
