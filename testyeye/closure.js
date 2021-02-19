// function show(mess){
//     return function(){
//         console.log(mess + " - kietkute");
//     };
// }


// var messFunc = show("xin cho bon may");

// messFunc();

//--------------------------------------------------
function showMessage(message){
    return (time) => {
        for (var i = 1; i <= time; i++){
            console.log(message + " - ok");
        }
    };
}

showMessage("Kiet")(10)

