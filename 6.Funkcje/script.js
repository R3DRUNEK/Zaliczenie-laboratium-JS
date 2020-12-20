//Zadanie 1
function testFunction () {
  console.log("Udalo sie");
}
//Zadanie 2
function testFunction2 (x) {
  console.log(x);
}
//Zadanie 3
function testFunction3 (x) {
  return x;
}
//Zadanie 4
testFunction4("siema");
function testFunction4 (x) {
  let $counter2 = 0;
  let timer = setInterval (() => {
    $counter2++;
    if($counter2 <= 5) {
      console.log (x);
    } else {
      console.log("koniec");
      clearInterval(timer);
    }
  }, 3000);

}
