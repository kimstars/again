var fs = require('fs');

function ReadFilePromise(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding :'utf8'}, function(err,data){
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

Promise.all([
    ReadFilePromise('./song1.txt'),
    ReadFilePromise('./song2.txt')
]).then(function(values){
    console.log(values);
}).catch(function(err){
    console.log(err);
});


