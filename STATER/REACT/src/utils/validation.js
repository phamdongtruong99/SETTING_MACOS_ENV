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
