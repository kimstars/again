//object constructor

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


person1.address = "hanoi";
console.log(person1.address);

