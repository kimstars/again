// Function closure đóng gói bên trong
function counter(){
    var count = 0;
    function stepUp(){
        count++;
        return count;
    }
    return stepUp
}


var  up = counter(); // up có typeOf là function
console.log(up());
console.log(up());
console.log(up());
console.log(up());

function xinChao(){
    var s = "Hello";

    var hi = (name) => {
        console.log(s + " " + name)
    }
    return hi;
}

let xc = xinChao();

xc("JavaScript");
xc("kiet");


let $ = (function xinChao(){
    var s = "Hello";

    var hi = (name) => {
        console.log(s + " " + name)
    }
    return hi;
})()

$("chào cậu nhé! Kiệt")
