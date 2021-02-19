var myFriend = { 
    name : 'Milu', 
    age : 10,  
    dead : false
};

var myFrString = JSON.stringify(myFriend); //object thành string

var myFen = JSON.parse(myFrString); // string thành object

console.log(typeof myFrString);


console.log(myFen);