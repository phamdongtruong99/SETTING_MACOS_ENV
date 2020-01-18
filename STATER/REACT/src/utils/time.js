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

export const getYesterday = () => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
};

export const isLeapYear = year => {
  return year % 4 === 0 && year % 100 !== 0;
};

// isLeapYear(2008) // true

export const syncWait = ms => {
  const end = Date.now() + ms;
  while (Date.now() < end) continue;
};

// https://stackoverflow.com/questions/6921895/synchronous-delay-in-code-execution

export const asyncWait = ms => new Promise(resolve => setTimeout(resolve, ms));
