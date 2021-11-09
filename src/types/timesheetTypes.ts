import * as t from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

export const TimesheetCodec = t.type({
  id: t.string,
  userId: t.string,
  projectId: t.string,
  projectName: t.string,
  date: DateFromISOString,
  hours: t.number,
});

export const TimesheetEventResponseCodec = t.type({
  userName: t.string,
  userId: t.string,
  rangeStartDate: DateFromISOString,
  rangeEndDate: DateFromISOString,
  timesheets: t.array(TimesheetCodec),
});

export type TimesheetEventResponse = t.TypeOf<
  typeof TimesheetEventResponseCodec
>;

export type Timesheet = t.TypeOf<typeof TimesheetCodec>;
