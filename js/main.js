function getRandomInteger (from, to) {
  let low = Math.ceil(Math.min(from, to));
  let high = Math.floor(Math.max(from, to));
  return  Math.floor(Math.random()*(high - low + 1) + low);
}

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

let photosInfo = [];

for(let i = 0; i < 25; i++){
  photosInfo.push({
    id: i+1,
    url: 'photos/' + (i+1) + '.jpg',
    description: 'Я - прекрасное описание картинки с id равным: ' + (i+1),
    likes: getRandomInteger(15, 200),
    comments: getRandomInteger(0, 200)
  });
}

console.log(photosInfo[24]);
