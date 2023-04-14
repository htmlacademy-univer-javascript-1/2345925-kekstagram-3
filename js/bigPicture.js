import {changeEffect} from './previewImg.js';

const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImgUploadButton = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
function clearFields(){
  form.querySelector('.text__hashtags').value = '';
  form.querySelector('.text__description').value='';
}

function closeImgUpload() {
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeKeyHandler);
  fileInput.addEventListener('change', openImgUpload);
  clearFields();
}

function escapeKeyHandler(evt) {
  if(evt.key === 'Escape'){
    closeImgUpload();
  }
}

function openImgUpload(){
  changeEffect(document.querySelector('#effect-none'));
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', escapeKeyHandler);

  const img = document.querySelector('.img-upload__preview').querySelector('img');
  img.src = window.URL.createObjectURL(fileInput.files[0]);
}

fileInput.addEventListener('change', openImgUpload);
closeImgUploadButton.addEventListener('click', closeImgUpload);

export {closeImgUpload};
