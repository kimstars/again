//chiều giờ làm được cái này khoe mày xem
// ^^ một cái app quản lý thông tin hoho dùng json ~~

// có vẻ tầm thường thui nma làm một lúc ms đc đó
// ok 3 chức năng chính bên dưới hehe
// 2 tạo ra nma chưa lưu ^^ 
// 3 để lưu  ^^
//hết ùi 
// thanks đã watching :3

var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];

function loadData(){
    var fileContent  = fs.readFileSync("./data.json");
    students = JSON.parse(fileContent);
}

function showMenu(){
    console.log("1. Show all students");
    console.log("2. Create a new student");
    console.log("3. Delete by Name ");
    console.log("4. Save and Exit ");
    var choose = readlineSync.question('> ');
    switch(choose){
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudents();
            showMenu();
            break;
        case '3':
            DeleteName();
            showMenu();
        case '4':
            saveAndExit();
            break;
        default:
            console.log("Wrong option");
            showMenu();
            break;
    }
}

function showStudents(){
    var len = students.length;
    for(var student of students){
        console.log("Name : "+ student.name + ". Age : "+ student.age);
    }
}

function showCreateStudents(){
    var name = readlineSync.question('>Name : ');
    var age = readlineSync.question('>Age : ');
    var student = {
        name : name,
        age : parseInt(age)
    }
    students.push(student);
}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, {encoding: 'utf8'});
}

function DeleteName(){
    var name = readlineSync.question('>Name to delete : ');
    var newStudents = students.filter(item => item.name !== name);
    students = newStudents;
    console.log(students);
    var option = readlineSync.question('Do u want save change? (y/n) ');
    switch(option){
        case 'y':
            saveAndExit();
            break;
        case 'n':
            loadData();
            break;
        default:
            console.log("wrong option !");
            showMenu();
            break;
    }
}


function main(){
    loadData();
    showMenu();
    
}

main();