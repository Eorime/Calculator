//number array
let numberArr = [];

//funqcia romelic arrays elementebs ertmanets miumatebs

// actions
let clear = document.getElementById("clear");
let percent = document.getElementById("percent");
let root = document.getElementById("root");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let minus = document.getElementById("addition");
let plus = document.getElementById("subtraction");
let equality = document.getElementById("equality");
let decimal = document.getElementById("decimal");

//numbers
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

//define functions for the operations : D
//number clicks
one.addEventListener("click", function () {
  numberArr.push(1);
  /*checking*/ console.log(numberArr);
  //   console.log("1"); // add to the number array(?)
});

two.addEventListener("click", function () {
  console.log("2");
});

three.addEventListener("click", function () {
  console.log("3");
});

four.addEventListener("click", function () {
  console.log("4");
});

five.addEventListener("click", function () {
  console.log("5");
});

six.addEventListener("click", function () {
  console.log("6");
});

seven.addEventListener("click", function () {
  console.log("7");
});

eight.addEventListener("click", function () {
  console.log("8");
});

nine.addEventListener("click", function () {
  console.log("9");
});

zero.addEventListener("click", function () {
  console.log("0");
});

function squareRoot() {
  console.log(Math.sqrt(numberArr));
}

function percentage() {
  console.log(Math);
}
//operation clicks
root.addEventListener("click", squareRoot);
percent.addEventListener("click", percentage);
//root percentage decimal clear

//we could clear the existing array after the click and do the operation w the current number(?)
//the problem is theres gonna be only one operation
//gotta merge the elements of the array if theres more than one to get the desired number
