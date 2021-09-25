import { FC, useState } from 'react';
import { Table } from 'semantic-ui-react';
import TimesheetTableHeaders from './TimesheetTableHeaders';
import TimesheetTableRow from './TimesheetTableRow';

const TimesheetTable: FC<TimesheetTableProps> = ({ weekDays }) => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number[]>(Array(7).fill(0));
  console.log(hoursPerWeek);
  //TODO: call API to get hours for the week
  return (
    weekDays && (
      <div>
        <Table columns={8}>
          <TimesheetTableHeaders weekDays={weekDays} />
          <Table.Body>
            {hoursPerWeek.map(() => (
              <TimesheetTableRow key={'0'} week={hoursPerWeek} />
            ))}
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
