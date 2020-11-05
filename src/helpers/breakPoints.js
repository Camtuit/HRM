/* eslint-disable no-param-reassign */
import deviceSize from '../constants/deviceSize';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const breakpoints = Object.keys(deviceSize).reduce((obj, key) => {
  obj[key] = `(min-width: ${deviceSize[key]})`;
  const capital = capitalize(key);
  obj[`down${capital}`] = `max-width`;
  return obj;
}, {});

export default breakpoints;
