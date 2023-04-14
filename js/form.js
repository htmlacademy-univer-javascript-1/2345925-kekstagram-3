import {closeImgUpload} from './bigPicture.js';
import {sendData} from './api.js';
import {testHashTag} from './util.js';
const form = document.querySelector('.img-upload__form');
//const templateSuccess = document.querySelector('#success').content;

const pristineComment = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'form--valid',
  errorClass: 'form--invalid',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
  errorTextTag: 'span'
});

const pristineHashTag = new Pristine(form, {
  classTo: 'img-upload__text',
  successClass: 'form--valid',
  errorClass: 'form--invalid',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error',
  errorTextTag: 'span'
});

pristineHashTag.addValidator(
  form.querySelector('.text__hashtags'),
  testHashTag,
  'От 3 до 20 символов, Начинается с "#" ');
function validComment(comment){
  return comment.length >= 20 && comment.length <=140;
}
pristineComment.addValidator(
  form.querySelector('.text__description'),
  validComment,
  'От 20 до 140 с имволов');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(pristineComment.validate() && pristineHashTag.validate()) {
    evt.target.querySelector('.img-upload__submit').disabled = true;
    sendData(
      () => {
        evt.target.querySelector('.img-upload__submit').disabled = false;
      },
      new FormData(evt.target)
    );
    closeImgUpload();
  }
});

/*
function openSuccessWindow(){
  const successNode = templateSuccess.cloneNode(true);
  const body = document.querySelector('body');
  const closeSuccessButton = successNode.querySelector('.success__button');
  body.appendChild(successNode);
  closeSuccessButton.addEventListener('click', (evt) => {
    evt.preventDefault();
  });
}
*/
