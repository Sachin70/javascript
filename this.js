// The this keyword in JavaScript refers to the context in which a function is executed.Its value depends on how the function is called.
// Understanding how this behaves in different contexts is crucial for writing and debugging JavaScript code.

const obj = {
  name: "Alice",
  greet: function () {
    const innerGreet = () => {
      console.log(this.name); // 'this' refers to obj
    };
    innerGreet();
  },
};

obj.greet();
