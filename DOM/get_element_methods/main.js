// var headingNode = document.getElementsByClassName('heading');

// // console.log(typeof headingNode);

// var tagName = document.getElementsByTagName('p');

// // console.log(tagName);


// var cssSelector = document.querySelector(".heading:nth-child(3)"); // nth-child

// console.log(cssSelector);


// var cssAll = document.querySelectorAll(".heading");

// console.log(cssAll);

var headingNode = document.querySelector('h1');

headingNode.setAttribute('title', 'title test');


var a = headingNode.getAttribute('class');

console.log(headingNode.getAttribute('class'));  


var headingElement = document.querySelector('h2');

var a = headingElement.getAttribute('class');
console.log(a);

// alert(a);