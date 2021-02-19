//Arrow function - khai báo hàm 

function tong (x,y){
    return x + y;
}


var sum = (x, y) =>{
    return x + y;
}


var sum1 = (x, y) => (x + y)

var giaithua = n =>{
    var tich = 1
    for (let i = 1; i <= n; i++){
        tich *= i
    }
    console.log(n +"! = " + tich)
}


console.log(sum(10,20))
console.log(sum1(20,20))

giaithua(10)


var info = () => console.log("INFO______")
info()