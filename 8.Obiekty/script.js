// Zadanie 1 i 2
let carT = {
  type:"Mercedes",
  model:"Series A",
  color:"white",
  changeName(newName) {
    this.type = newName;
  }
};
// Zadanie 3

let testObj = {
  sum: 0,
  calculateSum(testArray) {
    this.sum = testArray.reduce((a, b) => {return a + b});
  }
};
testObj.calculateSum([20, 50, 30]);
console.log(testObj.sum);

// Zadanie 4 i 5

let car = {
  type:"Mercedes",
  model:"Series A",
  color:"white",
  obj: {
    type: "Fiat"
  }

};
Object.keys(car).forEach(key => {
  console.log(`${key}: ${car[key]}`);
});
console.log(car.obj.type);

car.wheels = "super";
car.sayHello = () => console.log("Hello world");

car.sayHello();
