import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAtom } from 'jotai';
import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import { timesheetsAtom } from '../atoms/timesheetAtom';

const TimesheetTableRow: FC<TimesheetTableRowProps> = ({ week }) => {
  const [timesheets] = useAtom(timesheetsAtom);
  // console.log('timesheets');
  // console.log(timesheets);


  const time = createTimeTable(timesheets);
  time &&
    Array.from(time.values()).map((val) =>
      Array.isArray(val) ? console.log(val[0].hours) : console.log(val)
    );

  return (
    <Table.Row>
      {/* {timesheets.map((sheet) => (
        <Table.Cell>{sheet.hours}</Table.Cell>
      ))} */}
      {time &&
        Array.from(time.values()).map((val) =>
          Array.isArray(val) ? (
            <Table.Cell>{val[0].hours}</Table.Cell>
          ) : (
            <Table.Cell>{val}</Table.Cell>
          )
        )}
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
function createTimeTable(timesheets: any) {
  throw new Error('Function not implemented.');
}
