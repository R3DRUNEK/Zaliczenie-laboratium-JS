
let ifVariable1 =  5;
let ifVariable2 = 6;
if (ifVariable1 > ifVariable2) {
  console.log("IfVariable1 jest większa");
} else if (ifVariable1 < ifVariable2) {
  console.log("IfVariable2 jest większa");
}

// Zadanie 2

let num1 =  5;
let num2 = 6;
let num3 = 7;
if ((num1 >= num2) && (num1 >= num3)) {
  console.log("num1 jest największa");
} else if ((num2 >= num1) && (num2 >= num3)) {
  console.log("num2 jest największa");
} else {
  console.log("num3 jest najwieksza");
}

// Zadanie 3

for (let i = 0; i < 10; i++) {
  console.log("Lubię Javascript");
}

// Zadanie 4

// let result = 0;

for (let i = 1; i <= 10; i++) {
  result += i;
}

// Zadanie 5

let n = 10;
for (let i = 0; i <= n; i++) {
  let equality = i % 2 === 0 ? "parzysta" : "nieparzysta";
  console.log(`${i} - ${equality}`);
}


// Zadanie 6

for (let i = 0, j = 0; i <= 10; i++, j+=2) {
  console.log("i= " + i + ", j= " + j);
}

// Zadanie 7
for (let i = 0; i <= 100; i++) {
  let tempI = i;
  if (i === 0) {
  }
  else if (i % 3 === 0) {
    i = "Fizz";
  } else if (i % 5 === 0) {
    i = "Buzz";
  } else if (i % 3 === 0 && i % 5 === 0) {
    i = "FizzBuzz";
  }
  console.log(i);
  i = tempI;
}

// zadanie 8

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

for (let i = 1, j = 5; i <= 5; i++, j--) {
  console.log(" ".repeat(j) + "* ".repeat(i));
}

for (let i = 1, j = 1, c = 5; i <= 5; i++, j += 2, c--) {
  console.log(" ".repeat(c) + "*".repeat(j));
}

let temp = '';
let j;
for (let i = 1, k = 0; k <= 10; i++, k++) {
  if (k < 5) {
    for (j = i; j <= 4; j++) {
      temp += j;
    }
  }
  if (k > 5) {
    i -= 2;
    for (j = i; j <= 4; j++) {
      temp += j;
    }
  }
  if (k === 5) {
    console.log("-----");
  } else {
    console.log ("*".repeat (i) + temp);
  }
  temp = '';
}

for (let i = 1, j = 5, c= 0; c < 8; i++, j--, c++) {
  if (c > 4) {
    console.log(" ".repeat(4) + "*");
  } else {
    console.log (" ".repeat (j) + "* ".repeat (i));
  }
}
