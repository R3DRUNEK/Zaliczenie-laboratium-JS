let person1 = {
  name: 'test',
  surname: 'test2',
  age: 18,
  country: 'Poland',
  city: 'Cracow',
  show() {
    console.log (Object.values (this));
  },
  addAgeYear() {
    console.log (this);
    this.age += 1;
  }
};

let person2 = {
  name: 'Jan',
  surname: 'test3',
  age: 20,
  country: 'Poland',
  city: 'Warsaw',
  show() {
    console.log(Object.values(this));
  },
  addAgeYear() {
    this.age += 1;
  }
};


person1.show();
person1.addAgeYear();
console.log(person1.age);
person1.addAgeYear.call(person2);
console.log(person2.age);

person1.favoriteFoods = ['sushi', 'rekin'];
person2.favoriteFoods = ['test', 'test2'];

person1.showFavoriteFoods = function() {console.log(this.favoriteFoods)};
person2.showFavoriteFoods = function() {console.log(this.favoriteFoods)};
person1.addNewFavoriteFood = function(element) {this.favoriteFoods.push(element)};
person2.addNewFavoriteFood = function(element) {this.favoriteFoods.push(element)};

person1.showFavoriteFoods();
person2.showFavoriteFoods();


const calculator = {
  a: 0,
  b: 0,
  setNumbers(a, b) {
    this.a = a;
    this.b = b;
  },
  sumNumbers() {
    return this.a + this.b;
  },
  subtractNumbers() {
    return this.a - this.b;
  },
  multiplyNumbers() {
    return this.a * this.b;
  },
  divideNumbers() {
    if (!this.b) {
      console.log("Nie mozna dzielic przez 0");
      return;
    }
    return this.a / this.b
  }
};

calculator.setNumbers(5, 5);

const simulateDrabber = {
  state: "down",
  goUp() {
    this.setState("up");
  },
  goDown() {
    this.setState("down");
  },
  setState(state) {
    if (this.state !== state) {
      this.state = state;
    }
  }
};
