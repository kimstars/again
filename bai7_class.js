//class trong JavaScript ES6

class Person {
    constructor(id, name) {
        this._id = id
        this._name = name;
    }

    info() {
        console.log(this._id + " - " + this._name);
    }

    static hello(){
        console.log("HELLO!");
    }
    set id(id){
        this._id = id;
    }
}

// phân biệt với static 
// không có static thi dùng cho đối tượng vd : person1
// có static dùng cho class vd : Person 
// static là hàm dùng chung

let person1 = new Person(1, "A")
let person2 = new Person(2, "B")

person1.info();

Person.hello();
