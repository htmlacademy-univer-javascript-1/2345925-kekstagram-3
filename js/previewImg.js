const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview').querySelector('img');
const effectsRadio = document.querySelectorAll('.effects__radio');
const effectLevelSlider = document.querySelector('.effect-level__value');

const labels = document.getElementsByTagName('LABEL');
for (let i = 0; i < labels.length; i++) {
  if (labels[i].htmlFor !== '') {
    const elem = document.getElementById(labels[i].htmlFor);
    if (elem) {
      elem.label = labels[i];
    }
  }
} // привязка label к input

effectLevelSlider.addEventListener('input', (evt) => {
  evt.preventDefault();
  const style = getComputedStyle(previewImage);
  if(style.filter.startsWith('sepia')){
    effectLevelSlider.max = 1;
    effectLevelSlider.step = 0.05;
    previewImage.style.filter = `sepia(${effectLevelSlider.value})`;
  } else if(style.filter.startsWith('invert')){
    effectLevelSlider.max = 100;
    effectLevelSlider.step = 5;
    previewImage.style.filter = `invert(${effectLevelSlider.value}%)`;
  } else if(style.filter.startsWith('blur')){
    effectLevelSlider.max = 3;
    effectLevelSlider.step = 0.15;
    previewImage.style.filter = `blur(${effectLevelSlider.value}px)`;
  } else if(style.filter.startsWith('grayscale')){
    effectLevelSlider.max = 1;
    effectLevelSlider.step = 0.05;
    previewImage.style.filter = `grayscale(${effectLevelSlider.value})`;
  } else if(style.filter.startsWith('brightness')){
    effectLevelSlider.max = 3;
    effectLevelSlider.step = 0.15;
    previewImage.style.filter = `brightness(${effectLevelSlider.value})`;
  }
});

const changeEffect = (input) => {
  previewImage.classList.forEach((val, key, lst) => lst.remove(val));
  const span = input.label.querySelector('.effects__preview');
  previewImage.classList.add(span.classList.item(1));
};

effectsRadio.forEach((checkbox) => {
  checkbox.addEventListener('change', (evt) => {
    previewImage.style.filter = '';
    evt.preventDefault();
    if(evt.target.checked){
      changeEffect(evt.target);
      effectLevelSlider.value = effectLevelSlider.max;
    }
  });
});
const changePreviewImg = (currPercent) => {
  previewImage.style= `transform: scale(${currPercent/100})`;
};

buttonSmaller.addEventListener('click', (evt) => {
  evt.preventDefault();
  let currPercent = +scaleValue.value.substring(0, scaleValue.value.length - 1);
  currPercent = currPercent - 25;
  if(currPercent < 25){
    currPercent = 25;
  }
  scaleValue.value = `${currPercent}%`;
  changePreviewImg(currPercent);
});

buttonBigger.addEventListener('click', (evt) => {
  evt.preventDefault();
  let currPercent = +scaleValue.value.substring(0, scaleValue.value.length - 1);
  currPercent = currPercent + 25;
  if(currPercent > 100){
    currPercent = 100;
  }
  scaleValue.value = `${currPercent}%`;
  changePreviewImg(currPercent);
});

export {changeEffect};
