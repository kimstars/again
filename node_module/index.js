// function Mouse(color){
//     this.color = color;
//     this.dead = false;
// };

// Mouse.prototype.die = function(){
//     this.dead = true;
// };

// function Cat(){
//     this.stomach = [];
// }

// Cat.prototype.eat = function(mouse){
//     this.stomach.push(mouse);
//     mouse.die();
// };

var Mouse = require('./mouse');
var Cat = require('./cat');


var mickey = new Mouse('black');
var jerry = new Mouse('white');

var tom = new Cat();

tom.eat(mickey);
tom.eat(jerry);


console.log(tom);