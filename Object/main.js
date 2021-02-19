var myInfo = {
    name : "chu tuan kiet",
    age : 16,
    address : 'Ha Noi, VN'
};

myInfo.email = 'buikiet@gmail.com';
console.log(myInfo);

console.log(myInfo.name); // cach1
console.log(myInfo['name']); // cach 2

var name = 'name';

console.log(myInfo[name]);// cach 3


delete myInfo.age;
console.log(myInfo);



