import {getRandomInteger} from './util.js'

let photosInfo = [];

for(let i = 0; i < 25; i++){
  photosInfo[i] = {
    id: i+1,
    url: 'photos/' + (i+1) + '.jpg',
    description: 'Я - прекрасное описание картинки с id равным: ' + (i+1),
    likes: getRandomInteger(15, 200),
    comments: getRandomInteger(0, 200)
  }
}

export {photosInfo};
