import { photosInfo } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');
const newFragment = new DocumentFragment();

//console.log(photosInfo);

photosInfo.forEach((photo)=> {
  const template = pictureTemplate.cloneNode(true);
  const img = template.querySelector('.picture__img');
  const likes = template.querySelector('.picture__likes');
  const comments = template.querySelector('.picture__comments');
  img.src = photo.url;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments;

  newFragment.append(template);
});

pictures.append(newFragment);

export {pictures};
