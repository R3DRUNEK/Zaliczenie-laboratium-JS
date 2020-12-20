
function Person(name, surname, age, country, city, language) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.country = country;
  this.city = city;
  this.language = language;
  this.setAge = (age) => {
    this.age = age;
  };
  this.setCity = (city) => {
    this.city = city;
  }
}

const personOne = new Person("Mary", "Didi", 20, "Polska", "Krakow", "PL");
const personSecond = new Person("Stephan", "Miki", 20, "Niemcy", "Berlin", "PL");
const personThird = new Person("Jakub", "Siki", 20, "Polska", "Krakow", "PL");
const personFourth = new Person("Marta", "Testy", 20, "Polska", "Krakow", "PL");
const personFifth = new Person("Nela", "Dram", 20, "Polska", "Krakow", "PL");
personOne.setAge(15);
personSecond.setCity("Kraków");
personThird.setAge(25);
personFourth.setCity("Test");
console.log(personOne);
console.log(personSecond);


// 2



function Calculator() {
  this.memory = [];
  this.add = (...args) => {
    this.memory.push('ADD');
    return args.reduce((previous, current) => {
      return previous + current;
    });
  };

  this.sub = (...args) => {
    this.memory.push('SUBTRACTION');
    return args.reduce((previous, current) => {
      return previous - current;
    });
  };

  this.div = (...args) => {
    this.memory.push ('DIVISION');
    return args.reduce ((previous, current) => {
      return previous / current;
    });
  };

  this.mul = (...args) => {
    this.memory.push ('MULTIPLY');
    return args.reduce ((previous, current) => {
      return previous * current;
    });
  };

  this.clearMemory = () => {
    this.memory = [];
  };

  this.showMemory = () => {
    console.log(this.memory)
  }
}

const calc = new Calculator();
const calc2 = new Calculator();


function Game() {
  (() => {
    this.t = setInterval (() => {
      this.number = Math.floor ((Math.random () * 10) + 1);
      console.log(this.number);
      this.checkNumber();
    }, 1000);
  })();

  this.checkNumber = () => {
    if (this.number > 5) {
      clearInterval(this.t);
    }
    return this.number > 5;
  };
}


const game = new Game();

