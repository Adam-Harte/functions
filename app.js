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

//default arguments
const defFn = (par1 = 'default param value') => {
  console.log(par1);
};

defFn();

//rest parameters
const sumUp = (...args) => {
  return args.reduce((prev, cur) => prev + cur, 0);
};

//nested functions
const add = (a, b) => {
  const subtract = c => a + b - c;
  return subtract;
};

console.log(add(2, 7)(3));
add(2, 7)(3);

//callbacks
const callbackFn = fn => {
  fn();
};

callbackFn(() => console.log('callback'));

//bind
const sum = (a, b) => {
  return a + b;
}

const displaySum = (fn, a, b) {
  const result = fn(a, b);
  console.log(result);
}

displaySum(sum.bind(this, 'hi', 'there'), 1, 4);
displaySum(sum.bind(this, 2, 7), 3, 9);
displaySum(sum.call(this, 2, 7), 3, 9);
displaySum(sum.apply(this, 2, 7), 3, 9);