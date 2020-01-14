export const isNotAppleDevice = () =>
  !/iPhone|iPod|iPad/i.test(navigator.userAgent);
