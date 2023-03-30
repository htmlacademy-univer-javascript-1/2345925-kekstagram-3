const imgUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImgUploadButton = document.querySelector('.img-upload__cancel');

function closeImgUpload() {
  imgUpload.classList.add('hidden');
  document.removeEventListener('keydown', escapeKeyHandler);
}

function escapeKeyHandler(evt) {
  if(evt.key === 'Escape'){
    closeImgUpload();
  }
}

function openImgUpload(){
  imgUpload.classList.remove('hidden');
  document.addEventListener('keydown', escapeKeyHandler);
}

fileInput.addEventListener('change', openImgUpload);
closeImgUploadButton.addEventListener('click', closeImgUpload);

export {closeImgUpload};
