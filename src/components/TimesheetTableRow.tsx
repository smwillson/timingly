import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtom } from 'jotai';
import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import { timesheetsAtom } from '../atoms/timesheetAtom';
import { createTimeTable } from '../utils/misc';

const TimesheetTableRow: FC<TimesheetTableRowProps> = ({ week }) => {
  const [timesheets] = useAtom(timesheetsAtom);
  // console.log('timesheets');
  // console.log(timesheets);
  const time = createTimeTable(timesheets);
  return (
    <Table.Row>
      {timesheets.map((sheet) => (
        <Table.Cell>{sheet.hours}</Table.Cell>
      ))}
      {/* {createTimeTable(timesheets)} */}
      <Table.Cell>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Table.Cell>
    </Table.Row>
  );
};
//TODO:figure out why these are not printing
//Make sure that the trash icons line up in the last column
//button to add data
//autofill with zeros???
export default TimesheetTableRow;

interface TimesheetTableRowProps {
  week: number[];
}
