var person = {
    id : 1,
    name : "A", 
    age : 18,
    info : function(){
        console.log(this.id + " - " + this.name + " - " + this.age);
    },
    fullInfo: function(city, country){
        console.log(this.id + " - " + this.name + " - " + city +  " - " + country)
    }
}

// person.fullInfo("ha noi", "viet nam")

var person2 = {
    id : 2, name : "B"
}
// call
person.fullInfo.call(person2, "HCM" , "VN")

//apply
// truyen vao mang

person.fullInfo.apply(person2, ["HCM", "VN"])