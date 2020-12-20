$counterI = 0;
let timer = setInterval (() => {
  $counterI++;
  if($counterI <= 15) {
    console.log ("Cześć po raz" + $counterI);
  } else {
    clearInterval(timer);
  }
}, 3000);


const test = [1, 2, 3];
setTimeout(() => {
  let i = 0;
  test.forEach((element) =>  console.log(element));
  let timer = setInterval(() => {
    if (i < test.length) {
      console.log (test[i]);
    } else {
      clearInterval(timer);
    }
    i++;
  }, 3000);
}, 2000);
