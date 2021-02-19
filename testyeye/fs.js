//test fs


var  fs = require('fs');
// fs.writeFileSync('./song.txt', 'chu tuan kiet');

var text = fs.readFileSync('./song.txt', {encoding : 'utf8'});

console.log(text);

