


const event1 = document.getElementById("test-event").addEventListener('click', e => {
    console.log(e);
});

const event2 = window.addEventListener('mousemove', e => {
  console.log(e);
});

const event3 = document.getElementById("test-event").addEventListener('mouseenter', e => {
  console.log(e);
});

const event4 = window.addEventListener('keydown', e => {
  console.log(e);
});


const event5 = document.getElementById("input-test").addEventListener('input', e => {
  console.log(e);
});


const event6 = document.getElementById("ex2").addEventListener('click', function() {
  document.getElementById("span-ex2").innerHTML = this.getAttribute("data-text");
});

const event7 = document.getElementById("ex3").addEventListener('mouseenter', function() {
  this.style.backgroundColor = "blue";
});

const event8 = document.getElementById("ex3").addEventListener('mouseleave', function() {
  this.style.backgroundColor = "red";
});

const event9 = document.getElementById("input-test").addEventListener('input', function(e) {
  let regex=/^[0-9]+$/;
  if (e.data.match(regex))
  {
    this.value = '';
    alert("Nie mozna wpisywac cyfr");
  }
});

let count = 0;

const event10 = document.getElementById("ex5").addEventListener('click', eventClick);

function eventClick () {
  count += 1;
  document.getElementById("ex5-span").innerHTML = count.toString();
  if (count === 10) {
    this.removeEventListener('click', eventClick);
  }
}

const event11 = window.addEventListener('wheel', function(e) {
  if(this.scrollY < 200) {
     document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "red";
  }
});

let memory = [];
let operation = '';
let result = [];

const event12 = (elements) => {
  let arrayElements = Array.from(elements);
  arrayElements.forEach((element, key) => {
    elements[key].addEventListener("click", () => {
      switch (elements[key].innerHTML) {
        case '+':
          operation = '+';
          break;
        case '-':
          operation = '-';
          break;
        case '*':
          operation = '*';
          break;
        case '/':
          operation = '/';
          break;
      }
    });
  })
};


const event13 = (elements) => {
  let arrayElements = Array.from(elements);
  let input = document.querySelectorAll('#calculator input')[0];
  let result = 0;
  arrayElements.forEach((element, key) => {
    elements[key].addEventListener("click", () => {
      if (memory.length < 2) {
        memory.push (parseInt(elements[key].innerHTML));
      }
        if (operation && memory.length === 2) {
          switch (operation) {
            case '+':
              operation = '';
              result = memory[0] + memory[1];
              input.value = result;
              memory = [];
              break;
            case '-':
              operation = '';
              result = memory[0] - memory[1];
              input.value = result;
              memory = [];
              break;
            case '*':
              operation = '';
              result = memory[0] * memory[1];
              input.value = result;
              memory = [];
              break;
            case '/':
              operation = '';
              result = memory[0] / memory[1];
              input.value = result;
              memory = [];
              break;
          }
        }

    });
  })
};


let buttonsCalc = document.querySelectorAll('#calculator div:nth-of-type(2)')[0].children;
let buttonsNumb = document.querySelectorAll('#calculator div:nth-of-type(1)')[0].children;

event12(buttonsCalc);
event13(buttonsNumb);
