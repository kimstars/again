//promise fs

var fs = require('./node_modules/promise-fs')

function onDone(song){
    console.log(song);
}

function error (err){
    console.log(err);
}

function readFile(path){
    return fs.readFile(path, {encoding :'utf8'});
}

readFile('song1.txt')
    .then(onDone)
    .then(function(){
        return readFile('song2.txt');
    })
    .then(onDone)
    .catch(error);