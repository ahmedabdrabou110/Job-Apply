//! Example to use Ananymous Function and can't use Named function

//* First Example
setTimeout(function () {
  console.log("My name is Ahmed");
}, 200);

//* Second Example

const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map(function (n) {
  return n * 2;
});

//! In both Example , an Ananymous Function is defined and passed as argument to another function (high order) in first example , the ananymous function is used as a callback to setTimeout method which calls the function after 200 milliseconds . in second example , the ananymous function is used as an argument to map method  which call the function on each element of the number array and returns a new array .

//! Example to use regular Function and can't use arrow function

const person = {
  firstName: "Ahmed",
  lastName: "Abdrabou",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName()); // Ahmed Abdrabou

//! one reason to use regular funcation instead of arrow function is when you need to access `this` keyword  in previous example , defining object called person with property called `getFullName` that is a function. That uses the `this` keyword to access the `firstName` and `lastName` properties of the person object. If we we convert  to  arrow function, we can't access  this keyword  not work as expected.
