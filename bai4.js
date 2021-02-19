//function callback

function tong(x,y){
    return x + y;
}

function hieu(x,y){
    return x - y;
}


function tinhToan(call) {
    var kq = call(10, 5);
    console.log("result = " + kq);
}

tinhToan(hieu)
tinhToan(tong)

tinhToan((x, y) => (x*y))

tinhToan(
    function(x, y){
        return x / y;
    }
)


setTimeout(function (){
        console.log("xin chao")
    }, 5000)