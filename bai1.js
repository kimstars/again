function say(word){
    console.log(word);
}

function hieu(x = 10, y = 9){
    return x - y;
}



(function execute(someF, value){
    console.log(someF(value));
})(hieu,100)










