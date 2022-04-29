import { atom } from 'jotai';
import { Timesheet } from '../types/timesheetTypes';

export const timesheetsAtom = atom<Timesheet>({});
