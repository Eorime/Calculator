//screenis text contents operator axladsheyvanili number
let display = document.getElementById("screen");

function displayNum(numb) {
  if (display.textContent == 0) {
    display.textContent = numb;
  }
}

// actions
let clear = document.getElementById("clear");
let percent = document.getElementById("percent");
let root = document.getElementById("root");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let plus = document.getElementById("addition");
let minus = document.getElementById("subtraction");
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

//number clicks
one.addEventListener("click", function () {
  display.textContent = 1;
});

two.addEventListener("click", function () {
  display.textContent = 2;
});

three.addEventListener("click", function () {
  display.textContent = 3;
});

four.addEventListener("click", function () {
  display.textContent = 4;
});

five.addEventListener("click", function () {
  display.textContent = 5;
});

six.addEventListener("click", function () {
  display.textContent = 6;
});

seven.addEventListener("click", function () {
  display.textContent = 7;
});

eight.addEventListener("click", function () {
  display.textContent = 8;
});

nine.addEventListener("click", function () {
  display.textContent = 9;
});

zero.addEventListener("click", function () {
  display.textContent = 0;
});

//operation functions

clear.addEventListener("click", function () {
  display.textContent = 0;
});
// function squareRoot() {
//   display.textContent =.(Math.sqrt(numberArr));
// }

// function percentage() {
//   display.textContent =.(Math);
// }
// //operation clicks
// // root.addEventListener("click", );
// // percent.addEventListener("click", );
// decimal.addEventListener("click"  );
// clear.addEventListener("click"  );
// division.addEventListener("click"  );
// multiplication.addEventListener("click"  );
// addition.addEventListener("click"  );
// subtraction.addEventListener("click" );
// equality.addEventListener("click"  );

//root percentage decimal clear

// display text content display number
