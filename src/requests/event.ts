import axios from 'axios';
import { TimesheetEventResponseCodec } from '../types/timesheetTypes';
import { decodeData } from '../utils/decode';

export const fetchTimeSheets = (userId: string, fromTime: Date, toTime: Date) =>
  axios
    .get(
      `http://localhost:8080/timesheets?userId=blah&fromTime=2020-04-30T17:51:55.895Z&toTime=2020-05-30T17:51:55.895Z`
    )
    .then(({ data }) => decodeData(data, TimesheetEventResponseCodec));
