let moreDivs = document.querySelectorAll('.more-divs');
let tagsArray = [];

const tags = (elements) => {
  elements.forEach((element) => {
    tagsArray.push(document.createElement(element.tagName));
  });
  return tagsArray;
};


console.log(tags(moreDivs));


const display = (element) => {
  console.log(element.innerHTML);
  console.log(element.textContent);
  console.log(element.classList.toString());
  console.log(element.classList);
  console.log(element.nextElementSibling);
};

let shortList = document.querySelectorAll('.short-list')[0];
display(shortList);


const display2 = (...numbers) => {
  return numbers.reduce ((first, next) => {
    return parseInt(first) + parseInt(next);
  });
};

let element = document.querySelector('#datasetCheck');
console.log(display2(element.getAttribute('data-numberOne'), element.getAttribute('data-numberTwo')));


document.querySelector('#spanText').textContent = 'test';
document.querySelector('#spanText').className = 'test';

let seven = (element) => {
  let result = '';
  element.classList.forEach((className) => {
    console.log(className);
    result += '+';
    result += className;
  });
  console.log(result);
  element.classList.forEach((className) => {
    console.log(className);
    element.classList.remove(className);
  });
  console.log("Usunięto wszystkie klasy");
};

seven(document.querySelector('#classes'));



let eight = (elements) => {
  elements.forEach((element) => {
    if (!element.getAttribute('text')) {
      element.setAttribute('data-text', 'text');
    }
  });
};

eight(document.querySelectorAll('#longList li'));


let nine = (text) => {
  let obj = {
    newClass: text
  };
  nineSub(obj);
};

let nineSub = (obj) => {
  let temp = obj.newClass;
  let myDiv = document.querySelector("#myDiv");
  myDiv.className = temp;
};

nine("test2");

let ten = (parameter) => {
  let temp = document.querySelector('#numbers');
  temp.className = parameter % 2 === 0 ? 'even' : 'odd';
};

ten(Math.floor(Math.random() * 10));


let eleven = (element) => {
  let temp = [];
  element.childNodes.forEach((element) => {
    temp.push(element.textContent);
  });
  return temp;
};

console.log(eleven(document.querySelector("#longList")));

let twelve = (children) => {
  children.forEach((element) => {
    element.setAttribute("oldValue", element.textContent);
    element.textContent = Math.floor(Math.random() * 10);
  })
};

twelve(document.querySelectorAll('#longList *'));
