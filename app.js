//function declaration
function sayHello() {
  console.log('Hello');
}

sayHello();
console.log(typeof sayHello);
console.dir(sayHello);

//function expression
const sayBye = function() {
  console.log('bye');
};

sayBye();

//anonymous functions
const button = document.getElementById('btn');
button.addEventListener('click', function() {
  console.log('anonoymous function button click');
});

setTimeout(function() {
  console.log('anonoymous function timeout');
}, 3000);

//arrow functions
//arrow function expresison
const arrFn = () => {
  console.log('arrow function expression');
};

//anonymous arrow functions
setTimeout(() => {
  console.log('anonymous arrow function');
}, 5000);
