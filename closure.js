// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

const outerFunc = (lastName) => {
  const name = `Sachin + " " + ${lastName}`;

  const innerFunc = () => {
    console.log(name);
  };

  return innerFunc;
};

// const outerFuncResult =
outerFunc("Sharma")();
// console.log(outerFuncResult());
// outerFuncResult();

const counter = () => {
  let count = 0;  // Data privacy

  return {
    increment: () => {
      count++;
      console.log(count);
      //   return count;
    },

    decrement: () => {
      count--;
      console.log(count);
    },
  };
};

const counterInstance = counter();
// console.log(counterInstance.increment());
counterInstance.decrement();
counterInstance.increment();
