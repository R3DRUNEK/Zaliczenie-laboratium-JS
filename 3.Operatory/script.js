let tempOne = true;
let tempSecond = false;

console.log(tempOne === tempSecond);

// Zadanie 2

let first = 5;
let second = 6;
let moduloResult = 0;
moduloResult =  5 % 6;
console.log(moduloResult);

// Zadanie 3

let firstString = "test";
let secondString = "ddd";
let stringsResult = "";
stringsResult = firstString + secondString;
console.log(stringsResult);

// Zadanie 4

let someNumber = 425;
let someString = "425";

console.log(someNumber === someString);
console.log(someNumber == someString);

// Pierwsze zwróci false ponieważ porównuje typy zmiennych oraz wartości drugie natomiast zwróci true ponieważ sprawdza tylko wartości

// Zadanie 5

let counter = 30;

console.log(counter);
console.log(++counter);
console.log(--counter);


// Zadanie 6

let oneTemp = 5;
let secondTemp = 7;
let result = null;
if (oneTemp > secondTemp) {
  result = oneTemp + secondTemp;
}
console.log(result);
