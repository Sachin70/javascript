// The call, bind, and apply methods are used to explicitly set the this value for a function.
// These methods are useful when you need to control the context in which a function is executed.

// CALL

// function.call(thisArg, arg1, arg2, ...)

function greet(greeting) {
  console.log(greeting + ", " + this.name + ", " + this.age);
}

const person = {
  name: "Alice",
  age: 25,
};

greet.call(person, "Hello"); // Logs 'Hello, Alice'

// APPLY

// function.apply(thisArg, [argsArray])

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person2 = {
  name: "Bob",
};

greet.apply(person2, ["Hi"]); // Logs 'Hi, Bob'

// BIND

// const boundFunction = function.bind(thisArg, arg1, arg2, ...)

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person3 = {
  name: "Charlie",
};

const greetPerson = greet.bind(person3);
greetPerson("Hey"); // Logs 'Hey, Charlie'
