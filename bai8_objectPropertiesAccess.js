//object properties access

var personA = {
    name : "A",
    age : 20,
    address : "Ha Noi",
    talk : function() {
        return this.name +" talk about " + this.address + ". Age :" + this.age
    }
}


console.log(personA.talk())

const {age} = personA  // lấy giá trị của name và age trong personA
//sao chép giá trị thuộc tính trong personA
//khai báo các biến trùng tên với thuộc tính trong đối tượng

console.log(age);

const {name, ...other} = personA;
// other đại diện cho các biến khác trong personA
console.log(other); //other là một mảng các giá trị còn lại personA

console.log(other.address) // truy cập các phần tử trong address

let {talk} = personA;
console.log(talk.bind(personA)());

