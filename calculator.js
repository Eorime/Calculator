let display = document.getElementById("screen");
let numOne = document.getElementById("num-one");

//operations
let clear = document.getElementById("clear");
let percent = document.getElementById("percent");
let root = document.getElementById("root");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let plus = document.getElementById("addition");
let minus = document.getElementById("subtraction");
let result = document.getElementById("result");
let decimal = document.getElementById("decimal");
let operator = document.querySelector(".operator");

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
  if (display.textContent === "0") {
    display.textContent = 1;
  } else {
    display.textContent = display.textContent + 1;
  }
});

two.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 2;
  } else {
    display.textContent = display.textContent + 2;
  }
});

three.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 3;
  } else {
    display.textContent = display.textContent + 3;
  }
});

four.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 4;
  } else {
    display.textContent = display.textContent + 4;
  }
});

five.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 5;
  } else {
    display.textContent = display.textContent + 5;
  }
});

six.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 6;
  } else {
    display.textContent = display.textContent + 6;
  }
});

seven.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 7;
  } else {
    display.textContent = display.textContent + 7;
  }
});

eight.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 8;
  } else {
    display.textContent = display.textContent + 8;
  }
});

nine.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 9;
  } else {
    display.textContent = display.textContent + 9;
  }
});

zero.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = 0;
  } else {
    display.textContent = display.textContent + 0;
  }
});

//operation clicks
clear.addEventListener("click", function () {
  display.textContent = 0;
  numOne = "";
});

decimal.addEventListener("click", function () {
  display.textContent = display.textContent + ".";
});

root.addEventListener("click", function () {
  display.textContent = Math.sqrt(display.textContent);
});

percent.addEventListener("click", function () {
  display.textContent = parseFloat(
    (display.textContent / 100).toFixed(10).toString()
  );
});

division.addEventListener("click", function () {
  numOne = display.textContent;
  display.textContent = numOne + "/";
});

multiplication.addEventListener("click", function () {
  numOne = display.textContent;
  display.textContent = numOne + "*";
});

addition.addEventListener("click", function () {
  numOne = display.textContent;
  display.textContent = numOne + "+";
});

subtraction.addEventListener("click", function () {
  numOne = display.textContent;
  display.textContent = numOne + "-";
});

result.addEventListener("click", function () {
  display.textContent = eval(display.textContent);
});
