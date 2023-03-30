import {closeImgUpload} from './bigPicture.js';

const form = document.querySelector('.img-upload__form');
const templateSuccess = document.querySelector('#success').content;

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'error-inner'
});

function validComment(comment){
  //console.log('validating comment');
  //if(comment.length >= 20 && comment.length <=140) console.log('approved');
  return comment.length >= 20 && comment.length <=140;
}

pristine.addValidator(
  form.querySelector('.text__description'),
  validComment,
  'От 20 до 140 с имволов');

function openSuccessWindow(){
  const successNode = templateSuccess.cloneNode(true);
  const body = document.querySelector('body');
  const closeSuccessButton = successNode.querySelector('.success__button');
  body.appendChild(successNode);
  closeSuccessButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    successNode.parentNode.removeChild(successNode);
  });
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  //console.log('in event');
  if(pristine.validate()) {
    closeImgUpload();
    openSuccessWindow();
  }
});
