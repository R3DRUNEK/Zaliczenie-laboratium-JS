console.log(document.querySelector("#buz").parentElement);
console.log(document.querySelector("#baz").nextSibling);
console.log(document.querySelector("#foo").children);
console.log(document.querySelector("#foo").parentElement);
console.log(document.querySelector("#foo").children[0]);
console.log(document.querySelector("#foo").children[1]);

const listenEvent = (element) => {
  element.addEventListener("click", () => {
    console.log(element.children[0].children[0].children[0].children[1].children[0].children[0].textContent)
  })
};

let ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);

const listenEvent2 = (elements) => {
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      let span = element.nextElementSibling;
      if (span.style.display === "none") {
        span.style.display = "block";
      } else {
        span.style.display = "none";
      }
    })
  });
};

let ex3Buttons = document.querySelectorAll("#ex3 button");
listenEvent2(ex3Buttons);


const listenEvent3 = (elements) => {
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      element.style.backgroundColor = "#" + Math.floor (Math.random () * 16777215).toString (16);
    })
  });
};

listenEvent3(ex3Buttons);

const afterTime = (step, ulList, element) => {
  setTimeout(() => {
    afterTime2(step, ulList, element)
  },  step * 1000)
};

const afterTime2 = (step, ulList, element) => {
  let children = Array.from(ulList.children);
  switch(step) {
    case 1:
      ulList.children[0].style.backgroundColor = element.style.backgroundColor;
      break;
    case 2:
      ulList.lastElementChild.style.backgroundColor = element.style.backgroundColor;
      break;
    case 3:
      children.forEach((value, index) => {
        if (parseInt(ulList.children[index].innerHTML) % 2 === 0) {
          ulList.children[index].style.backgroundColor = element.style.backgroundColor;
        }
      });
      break;
    case 4:
      children.forEach((value, index) => {
          ulList.children[index].style.backgroundColor = element.style.backgroundColor;
      });
      break;
    case 5:
      children.forEach((value, index) => {
        ulList.children[index].style.backgroundColor = '';
      });
      break;
  }
};

const listenEvent4 = (elements) => {
  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      let ulList = document.querySelector("#ex5 ul");
      let list = [1, 2, 3, 4, 5];
      list.forEach((value) => {
        afterTime(value, ulList, element);
      })
      });
    })
};

let ex5rectangles = document.querySelectorAll("#ex5 div");
console.log(ex5rectangles);
listenEvent4(ex5rectangles);


let ex6 = document.querySelector("#ex6");
console.log(ex6.children[0].children[0].children[0]);
console.log(ex6.children[0].parentElement.children[0].children[0].nextElementSibling.parentElement);
console.log(ex6.parentElement.children[0].parentElement.children[1].children[0].children[0].children[0]);
