
function testHashTag(hashTag){
  if(hashTag.at(0) !== '#'){
    return false;
  }
  if(hashTag.length > 20 || hashTag.length < 3){
    return false;
  }
  for(let i = 1; i < hashTag.length; i++){
    const regExp = /([a-zа-я])/;
    if(regExp.test(hashTag.at(i)) === false){
      return false;
    }
  }
  return true;
}

function getRandomInteger (from, to) {
  const low = Math.ceil(Math.min(from, to));
  const high = Math.floor(Math.max(from, to));
  return  Math.floor(Math.random()*(high - low + 1) + low);
}

function checkLength(str, maxLength) {
  return(str.length <= maxLength);
}

function showAlert(message){
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
}

export {getRandomInteger};
export {checkLength};
export {showAlert};
export {testHashTag};
