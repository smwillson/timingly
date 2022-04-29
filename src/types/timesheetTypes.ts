import * as t from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

const WeekCodec = t.union([
  t.literal('MONDAY'),
  t.literal('TUESDAY'),
  t.literal('WEDNESDAY'),
  t.literal('THURSDAY'),
  t.literal('FRIDAY'),
  t.literal('SATURDAY'),
  t.literal('SUNDAY'),
]);

export const TimesheetCodec = t.type({
  id: t.string,
  projectId: t.string,
  date: DateFromISOString,
  hours: t.number,
  isDeleted: t.boolean,
});

export const TimesheetMap = t.record(t.string, t.array(TimesheetCodec));

export const TimesheetEventResponseCodec = t.type({
  timesheetsForDate: TimesheetMap,
});

export type TimesheetEventResponse = t.TypeOf<
  typeof TimesheetEventResponseCodec
>;

export type Timesheet = t.TypeOf<typeof TimesheetMap>;
