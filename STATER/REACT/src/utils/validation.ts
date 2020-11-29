export const passwordFormat = value => {
  const reg = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$');
  if (!reg.test(value)) {
    return 'Invalid password';
  }
  return false;
};

export const phoneFormat = value => {
  const reg = new RegExp(
    '([0-9\\s\\-]{7,})(?:\\s*(?:#|x\\.?|ext\\.?|extension)\\s*(\\d+))?$',
  );
  if (!reg.test(value)) {
    return 'Invalid phone number format';
  }
  return false;
};

/* eslint-disable no-useless-escape */
export const validateRegex = {
  phone: /((\+84[0-9]{9})|(\b0[0-9]{9}))(?![0-9])/g,
  password: /^(?=.*[a-z])(?=.*[0-9])(?=.*\d).{6,}$/g,
  username: /^([a-z0-9A-Z_-]{3,100})$/g,
  number: /^[-]?[0-9]*$/g,
  numberUnsigned: /^[0-9]*$/g,
  floatNumber: /^[-]?\d*\.?\d*$/,
  floatNumberUnsigned: /^\d*\.?\d*$/, // negative sign (-) is allowed
  editBookingId: '#bookings/(.*)/edit',
  fullName: /^[a-z0-9 ]{3,100}$/iu,
  hour: /^(2[0-3]|1[0-9]|[0-9])$/,
  minute: /^[1-5]?[0-9]$/,
  week: /^(5[0-3]|[1-4][0-9]|[1-9])$/,
  percentage: /^(100|[1-9]?[0-9])$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  month: /^(1[0-2]|[1-9])$/,
  day: /^(3[01]|[12][0-9]|[1-9])$/,
  web: /((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+)/gi,
  fileName: /\.(gif|jpg|jpeg|tiff|png)$/i,
  isGithubURL: /https?:\/\/github.com\/.*/gi,
  excludingNumber: /[^\d.]/g
};


export const validate2Passwords = (password, retypePassword) => {
  return password === retypePassword;
};

export const validateEmail = email => {
  const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
  return pattern.test(email);
};
