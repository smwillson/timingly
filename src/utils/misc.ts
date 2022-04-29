import {
  lastDayOfWeek,
  startOfWeek,
  addDays,
  isBefore,
  isSameDay,
  format,
} from 'date-fns';
import { Timesheet } from '../types/timesheetTypes';

export const createTimeTable = (timesheets: Timesheet) => {
  //"2021-01-27" v/s Sun Apr 10 2022 00:00:00 GMT-0500 (Central Daylight Time)
  if (Object.keys(timesheets).length) {
    const START_OF_WEEK = startOfWeek(Date.now(), { weekStartsOn: 0 });
    const END_OF_WEEK = lastDayOfWeek(Date.now(), { weekStartsOn: 0 });
    let result = new Map();

    for (
      let day = START_OF_WEEK;
      isBefore(day, END_OF_WEEK) || isSameDay(day, END_OF_WEEK);
      day = addDays(day, 1)
    ) {
      const thisDay = format(day, 'yyyy-MM-dd');
      result.set(thisDay, 0);
      const timesheetsForSameDay = timesheets[thisDay];
      result =
        timesheetsForSameDay && timesheetsForSameDay.length > 0
          ? result.set(thisDay, timesheetsForSameDay)
          : result;
    }
    return result;
  }
};

export const getCurrentWeekDays = () => {
  const today = new Date();
  const firstDay = startOfWeek(today, { weekStartsOn: 0 });
  const week = [firstDay];

  for (let index = 0; index < 6; index++) {
    week.push(addDays(week[index], 1));
  }
  return week;
};
