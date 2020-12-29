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

export const isLeapYear = (year) => {
  return year % 4 === 0 && year % 100 !== 0;
};

// isLeapYear(2008) // true

export const syncWait = (ms) => {
  const end = Date.now() + ms;
  while (Date.now() < end) continue;
};

export const asyncWait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// https://stackoverflow.com/questions/6921895/synchronous-delay-in-code-execution

export const formatDuration = (ms) => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};

// formatDuration(1001); // '1 second, 1 millisecond'

export const getTime = (time) => new Date(time).getTime();
// getTime("2020-02-26 00:00:00") => 1582675200000
export const timeSpent = (callback, showLog = true) => {
  if (typeof callback !== 'function') {
    throw new Error('You need to pass a function.');
  }

  return function (...rest: any) {
    if (showLog) {
      console.time(callback.name);
    }
    callback(...rest);
    if (showLog) {
      console.timeEnd(callback.name);
    }
  };
};

// Time Spent:  https://www.npmjs.com/package/utils-for-js

import format from 'date-fns/format'

export const formatDate = (date?: string | Date) => {
  if (!date) {
    return ''
  }
  const dateObject = typeof date === 'string' ? new Date(date) : date
  if (Number.isNaN(dateObject.getTime())) {
    return ''
  }
  return format(dateObject, 'MM/dd/yyyy')
}
