function getRandomInteger (from, to) {
  const low = Math.ceil(Math.min(from, to));
  const high = Math.floor(Math.max(from, to));
  return  Math.floor(Math.random()*(high - low + 1) + low);
}

function checkLength(str = '', maxLength = 0) {
  return(str.length <= maxLength);
}

export {getRandomInteger};
export {checkLength};
