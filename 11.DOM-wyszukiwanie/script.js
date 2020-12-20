let liElements = document.querySelectorAll("li");

let returnElements = (tag) => {
  return document.querySelectorAll(tag);
};

let body = returnElements("body");
console.log(body);

let listElement = document.querySelector("#list");

let returnElements2 = (tag) => {
  return document.querySelectorAll(tag);
};

console.log(returnElements2("li"));
console.log(returnElements2("ul"));
console.log(returnElements2("span"));
console.log(returnElements2("div.list > span"));
console.log(returnElements2("div#spans > span"));
