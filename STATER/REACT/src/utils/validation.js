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

export const validateRegex = {
  phone: /^(\+84|0)+([0-9]{9})$/gs,
  email: /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g,
  password: /^(?=.*[a-z])(?=.*[0-9])(?=.*\d).{6,}$/g,
  username: /^([a-z0-9A-Z_-]{3,100})$/g,
  editBookingId: '#bookings/(.*)/edit',
  fullName: /^[a-z0-9 ]{3,100}$/iu,
  number: /^[0-9]+$/iu,
  fileName: /\.(gif|jpg|jpeg|tiff|png)$/i,
  isGithubURL: /https?:\/\/github.com\/.*/gi
};

export const validate2Passwords = (password, retypePassword) => {
  return password === retypePassword;
};

export const validateEmail = email => {
  const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
  return pattern.test(email);
};
