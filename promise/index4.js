let promise = new Promise(function(resolve, reject){
    // setTimeout(() => resolve("ok"), 100);
    setTimeout(() => reject("error"), 100);
})

promise.then(
    (resp) => {
        console.log(resp);
        return resp;
    }
).catch(
    (err) => {
        console.log(err);
        throw err
    }
).then((data)=>{
    console.log("data "+ data);
}).catch(
    (err)=>{
        console.log("err 2 " + err);
    }
)
