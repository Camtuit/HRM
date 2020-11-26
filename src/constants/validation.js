const validation = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
  error: {
    error_401: 'ACCES IS ALLOOWED ONLY FOR REGISTER USER',
  },
};
export default validation;
