export const TimeConstants = {
  MillisecondsInOneDay: 86400000,
  MillisecondsIn1Sec: 1000,
  MillisecondsIn1Min: 60000,
  MillisecondsIn30Mins: 1800000,
  MillisecondsIn1Hour: 3600000,
  MinutesInOneDay: 1440,
  MinutesInOneHour: 60,
  DaysInOneWeek: 7,
  MonthInOneYear: 12,
};


export enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum MonthOfYear {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

export enum FirstWeekOfYear {
  FirstDay = 0,
  FirstFullWeek = 1,
  FirstFourDayWeek = 2,
}


export enum DateRangeType {
  Day = 0,
  Week = 1,
  Month = 2,
  WorkWeek = 3,
}
