import {
  lastDayOfWeek,
  startOfWeek,
  addDays,
  isBefore,
  isSameDay,
} from 'date-fns';
import { isEqual } from 'lodash';
import { FC, useState } from 'react';
import { Table } from 'semantic-ui-react';
import TimesheetTableHeaders from './TimesheetTableHeaders';
import TimesheetTableRow from './TimesheetTableRow';

const TimesheetTable: FC<TimesheetTableProps> = ({ weekDays }) => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number[]>(Array(7).fill(0)); //artificially create 7 records
  let counter = 0;
  const START_OF_WEEK = startOfWeek(Date.now(), { weekStartsOn: 0 });
  const END_OF_WEEK = lastDayOfWeek(Date.now(), { weekStartsOn: 0 });
  // console.log(isBefore(START_OF_WEEK, END_OF_WEEK));
  // console.log(addDays(START_OF_WEEK, 1));

  //TODO: call API to get hours for the week
  return (
    weekDays && (
      <div>
        <Table columns={8}>
          <TimesheetTableHeaders weekDays={weekDays} />
          <Table.Body>
            {hoursPerWeek.map(() => (
              <TimesheetTableRow key={counter++} week={hoursPerWeek} />
            ))}
            {
              //  for (
              //   let day = START_OF_WEEK;
              //   isBefore(day, END_OF_WEEK) || isSameDay(day, END_OF_WEEK);
              //   day = addDays(day, 1)
              // ) {
              //   console.log(day)
              // }
            }
          </Table.Body>
          {/* 
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>3 People</Table.HeaderCell>
              <Table.HeaderCell>2 Approved</Table.HeaderCell>
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
            </Table.Row>
          </Table.Footer> */}
        </Table>
      </div>
    )
  );
};

export default TimesheetTable;

interface TimesheetTableProps {
  weekDays: Date[];
}
