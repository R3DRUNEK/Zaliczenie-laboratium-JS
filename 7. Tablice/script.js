// Zadanie 1
let array1 = [1, 2, 3];
array1.forEach((element) => console.log(element));
// Zadanie 2
let array2 = [1, "s", 4, 5, 10, 20];
console.log(array2[0], array2[1]);
console.log(array2[array2.length-1]);
array2.forEach((element) => console.log(element));
for (let i = 0; i < array2.length; i+=2) {
  console.log(array2[i])
}
for (let i = 0; i < array2.length; i++) {
  if (typeof array2[i] === 'string') {
    console.log(array2[i]);
  }
}
for (let i = 0; i < array2.length; i++) {
  if (typeof array2[i] === 'number') {
    console.log(array2[i]);
  }
}
// Zadanie 3
let array3 = [1, 91, 4, 5, 10, 20];

console.log(array3.reduce((i, k) =>{return i + k}));
console.log(array3.reduce((i, k) =>{return i - k}));
console.log(array3.reduce((i, k) =>{return i + k}) / array3.length);
array3.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});
array3.forEach((element) => {
  if (element % 2 !== 0) {
    console.log(element);
  }
});

let biggest = 0;
array3.forEach((element) => {
  if (biggest > element) {
    biggest = element;
  }
});
console.log(biggest);

let smallest = array3[0];
array3.forEach((element) => {
  if (smallest < element) {
    smallest = element;
  }
});
console.log(smallest);

array3.reverse().forEach((element) => {
  console.log(element);
});
// Zadanie 4

function test3(arrayTest) {
  return arrayTest.reduce((i, k) =>{return i + k});
}

// Zadanie 5
function test4(arrayTest) {
  let temp = arrayTest.reduce((i, k) =>{return i + k}) / arrayTest.length;
  arrayTest.map((i) =>{console.log(i * temp)});
}
// Zadanie 6
function test5(arrayTest) {
  let temp = arrayTest.filter((elem) => {return elem % 2 === 0});
  return temp.reduce((i, k) =>{return i + k}) / temp.length;
}
// Zadanie 7
function test55(arrayToSort) {
  return arrayToSort.sort((a, b) => {return a-b});
}
// Zadanie 8
function test6(arrayTest, arrayTest2) {
  arrayTest = arrayTest.map((ele, index) =>{ return index });
  arrayTest2 = arrayTest2.map((ele, index) =>{ return index });
  return arrayTest.reduce((i, k) =>{return i + k}) + arrayTest2.reduce((i, k) =>{return  k});
}
// Zadanie 9

function test7(arrayTest, arrayElem) {
  return arrayTest.filter((elem) => {
    return elem !== arrayElem;
  })
}
// Zadanie 10

function test8(arrayTest) {
  return arrayTest.map((elem, index) => {
    if (index === 0) {
      return elem;
    }
    return arrayTest[arrayTest.length - index];
  })
}
