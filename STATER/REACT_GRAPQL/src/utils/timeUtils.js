// eslint-disable-next-line import/prefer-default-export
export const mergedDateAndTime = (date, time) => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const hour = new Date(time).getHours();
  const minute = new Date(time).getMinutes();
  const seconds = new Date(time).getSeconds();
  return new Date(year, month, day, hour, minute, seconds);
};
