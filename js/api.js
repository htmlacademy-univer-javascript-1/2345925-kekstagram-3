import {showAlert} from './util.js';
const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить данные. Попробуйте перезагрузить страницу');
      }
    })
    .then((data) => onSuccess(data))
    .catch(() => {
      showAlert('Не удалось загрузить данные. Попробуйте перезагрузить страницу');
    });
};

const sendData = (onSuccess, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(response.json());
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .then((data) => onSuccess(data))
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
