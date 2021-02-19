function click(){
    console.log(Math.random());
}

var h1selector = document.querySelectorAll('h1');

for(var i = 0; i < h1selector.length; ++i){
    h1selector[i].onclick = function(e){
        console.log(e.target)
    }
}



var height = width = "32px"

function bigImg(x){
    x.style.height = "64px";
    x.style.width = "64px";
}

function smallImg(x){
    x.style.height = "32px";
    x.style.width = "32px";
}

var x = 0;
function mymove(){
    document.getElementById("demo").innerHTML = x++;
}

function myfuck(){
    var btn = document.getElementsByTagName('button')[0];
    document.getElementById("demo1").innerHTML = x++;
}

var inputUser = document.querySelector('input[type="text"]')
var inputPass = document.querySelector('input[type="password"]')


inputUser.onchange = function(e){
    console.log(e.target.value)
}
var  x = 0
function mychange(){
    document.getElementById("changethis").innerHTML = x++;
}




