function getRandomInteger (from, to) {
  let low = Math.ceil(Math.min(from, to));
  let high = Math.floor(Math.max(from, to));
  return  Math.floor(Math.random()*(high - low + 1) + low);
}

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

//Тестирование
/*
let s = '';

for(let i = 0; i < 10; i++){
  console.log(getRandomInteger(0.5, 2.7));
  s += i;
  //console.log(checkLength(s, 2));
}
console.log(checkLength());
*/
