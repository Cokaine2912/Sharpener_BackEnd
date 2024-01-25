var naam = "Jos";

var age = 27;

var hashobby = true;

var product = (a, b) => a * b;

let ans = product(10, 3);

console.log(ans);

const student = {
  name: "Meredith",
  age: 21,
  greet() {
    console.log(`Hi !, I'm ${this.name}`);
    return (gotten = () => {
      console.log(this);
    });
  },
};

let k = student.greet();
k();

// The this keyword in fat arrows and regular functions

// Regular functions look for current obj that is calling the function

// Fat arrow functions look in to the lexical scope of the parent
