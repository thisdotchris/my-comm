/**
 * objIsChanged
 * @param {any} prevObj previous object values
 * @param {any} nextObj latest object values
 * @returns {boolean}
 */
export const objIsChanged = (prevObj, nextObj) => {
  let res = false;
  Object.keys(nextObj).forEach((k) => {
    if (prevObj[k] !== nextObj[k]) {
      res = true;
    }
  });
  return res;
};

/**
 * isLengthChanged
 * @param {number} prev
 * @param {number} next
 * @returns {boolean}
 */
export const isLengthChanged = (prev, next) => prev.length !== next.length;

export const removeSpaces = (str) => {
  if (str) {
    return str.toString().replace(/\s/g, "");
  }
  return;
};
