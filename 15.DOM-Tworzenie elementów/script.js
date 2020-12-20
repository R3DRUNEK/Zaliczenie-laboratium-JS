let el = document.createElement('div');

el.innerText = 'To jest nowy element';

document.body.appendChild(el);


let elements = ['banana', 'watermelon', 'apple', 'orange', 'kiwi', 'strawberry'];

elements.forEach((element) => {
  let li = document.createElement('li');
  li.innerText = element;
  document.body.appendChild(li);
});

let event = () => {
  let liElement = document.querySelectorAll('li');
  liElement.forEach((element, key) => {
    if (key % 2 === 1 ) {
      element.remove();
    }
  });
};

event();

let buttons = document.createElement('button');


document.body.appendChild(buttons);

buttons.addEventListener('click', function() {
  this.remove();
});

let randomNumber = Math.floor(Math.random() * 10);

for(let i = 0; i < randomNumber; i++) {
  let el = document.createElement('div');
  el.innerText = `To jest div z numerem ${i+1} `;
  document.body.appendChild(el);
}

let obj = {
  div1: 'to jest div',
  span1: 'to jest span',
  div2: {
    div3: 'to jest div'
  },
  span2: 'to jest span'
};

for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    let tag = prop.replace(/[0-9]/g, '');
    if (typeof obj[prop] === 'object') {
      let div = document.createElement('div');
      document.body.appendChild(div);
      let div2 = document.createElement('div');
      div2.innerHTML = 'to jest div';
      div.appendChild(div2);
    } else {
      el = document.createElement(tag);
      el.innerHTML = obj[prop];
      document.body.appendChild(el);
    }
  }
}

let ul = document.createElement('ul');
ul.id = "ul1";
document.body.appendChild(ul);
for(let i = 0; i < 6; i++) {
  let li = document.createElement('li');
  li.innerHTML = "test" + i;
  ul.appendChild(li);
}
button = document.createElement('button');
button.innerHTML = "Zamien1";
document.body.appendChild(button);

let ul2 = document.createElement('ul');
ul2.id = "ul2";
document.body.appendChild(ul2);

button2 = document.createElement('button');
button2.innerHTML = "Zamien2";
document.body.appendChild(button2);

button.addEventListener('click', function() {
  if(document.getElementById('ul1').lastElementChild) {
    document.getElementById('ul2').append(document.getElementById('ul1').lastElementChild);
  }
});

button2.addEventListener('click', function() {
  if(document.getElementById('ul2').lastElementChild) {
    document.getElementById('ul1').append(document.getElementById('ul2').lastElementChild);
  }
});



form = document.createElement('form');
document.body.appendChild(form);

input1 = document.createElement('input');
input1.id = 'input1';
document.body.appendChild(input1);

input2 = document.createElement('input');
input2.id = 'input2';
document.body.appendChild(input2);

input3 = document.createElement('input');
input3.id = 'input3';
document.body.appendChild(input3);

input4 = document.createElement('input');
input4.id = 'input4';
document.body.appendChild(input4);


button3 = document.createElement('button');
button3.innerHTML = 'Stworz element';
document.body.appendChild(button3);

button3.addEventListener('click', () => {
  let el = document.getElementById('input1').value;
  let text = document.getElementById('input2').value;
  let color = document.getElementById('input3').value;
  let repeat = document.getElementById('input4').value;
  for(let i = 0; i < parseInt(repeat); i++) {
    let el2 = document.createElement(el);
    el2.innerText = text;
    el2.style.backgroundColor = color;
    document.body.appendChild(el2);
  }
});

form2 = document.createElement('form');
form2.id = 'form2';
document.body.appendChild(form2);

span = document.createElement('span');
span.innerText = "imie";
form2.appendChild(span);
br = document.createElement('br');
form2.appendChild(br);

input5 = document.createElement('input');
input5.id = 'input5';
form2.appendChild(input5);

br = document.createElement('br');
form2.appendChild(br);


span = document.createElement('span');
span.innerText = "nazwisko";
form2.appendChild(span);
br = document.createElement('br');
form2.appendChild(br);

input6 = document.createElement('input');
input6.id = 'input6';
form2.appendChild(input6);

br = document.createElement('br');
form2.appendChild(br);

span = document.createElement('span');
span.innerText = "wiek";
form2.appendChild(span);
br = document.createElement('br');
form2.appendChild(br);

input7 = document.createElement('input');
input7.id = 'input7';
form2.appendChild(input7);

br = document.createElement('br');
form2.appendChild(br);

span = document.createElement('span');
span.innerText = "ilosc dzieci";
form2.appendChild(span);
br = document.createElement('br');
form2.appendChild(br);

input8 = document.createElement('input');
input8.id = 'input8';
form2.appendChild(input8);



button4 = document.createElement('button');
button4.innerHTML = 'Wiecej -> wpisz nazwe komorki';
document.body.appendChild(button4);

input9 = document.createElement('input');
input9.id = 'input9';
document.body.appendChild(input9);

document.body.appendChild(br);

button4.addEventListener('click', () => {
  let inp = document.createElement('input');
  let br = document.createElement('br');
  let span = document.createElement('span');
  span.innerText = document.querySelector('#input9').value;
  form2.appendChild(span);
  form2.appendChild(br);
  form2.appendChild(inp);
  form2.appendChild(br);
});

button5 = document.createElement('button');
button5.innerHTML = 'Utworz';
document.body.appendChild(button5);

let listener = () => {
  let elements = document.querySelectorAll('#form2 input');
  elements.forEach((element) => {
    element.value = element.value.charAt (0).toUpperCase () + element.value.substr (1);
  });
};

button5.addEventListener('click', listener);
button5.addEventListener('click', () => {
  let table = document.createElement('table');
  document.body.appendChild(table);
  let headers = document.querySelectorAll('#form2 span');
  let tr = document.createElement('tr');
  table.appendChild(tr);
  headers.forEach((header) => {
    let td = document.createElement('td');
    td.innerText = header.innerHTML;
    tr.appendChild(td);
  });
  let tr2 = document.createElement('tr');
  table.appendChild(tr2);
  let values = document.querySelectorAll('#form2 input');
  values.forEach((value) => {
    let td = document.createElement('td');
    td.innerHTML = value.value;
    tr2.appendChild(td);
  });
});


let eleven = (str) => {
  if (!isNaN(str.split(" ").join(''))) {
    let parsedStr = str.split(" ");
    let mul = parsedStr.reduce((first, next) => {
      return first * next;
    });
    for(let i = 0; i < mul; i ++ ) {
      let div = document.createElement('div');
      div.innerHTML = str;
      document.body.appendChild(div);
    }
  }
};

eleven("5 5");

let twelve = (str) => {
 let obj = {};
 obj.str = str;
 obj.check = function () {
   if (this.str === "Ala") {
     this.str = "Ola";
   } else {
     let div = document.createElement('div');
     div.innerHTML = "Slowa Ala nie wystepuje w tekscie";
     document.body.appendChild(div);
   }
 };
 obj.check();
};

twelve("Asla");


let thirteen = (strs) => {
  let temp = [];
  strs.forEach((el) => {
    temp.push(el.length);
  });
  return temp;
};

let thirteenAdd = (temp) => {
  return temp.reduce((first, next) => {
    return first + next;
  })
};

let thirteenAvg = (numbers) => {
  return thirteenAdd(numbers) / numbers.length;
};

let num = thirteen(["hej", "test"]);
console.log(thirteenAvg(num));


let newObj = {
  name: '',
  surname: '',
  age: ''
};

let newFunc = (strs) => {
  newObj.name = strs[0];
  newObj.surname = strs[1];
  newObj.age = strs[2];
  newObj.l = strs[0].length;
  newObj.l2 = strs[1].length;
  newObj.l3 = strs[2].length;
  strs.forEach((str) => {
    if (str.length >= 5) {
      let button = document.createElement('button');
      button.innerHTML = "Usun obiekt";
      document.body.append(button);
      button.addEventListener('click', () => {
        newObj = {
          name: '',
          surname: '',
          age: ''
        };
        console.log(newObj);
      });
    }
  });
  console.log(newObj);
};
newFunc(["sdfsdf", "test", "asda"]);
