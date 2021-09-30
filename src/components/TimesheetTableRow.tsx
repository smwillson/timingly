import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Table } from 'semantic-ui-react';

const TimesheetTableRow: FC<TimesheetTableRowProps> = ({ week }) => {
  return (
    <Table.Row>
      {/* {week.map((day) => {
        <Table.Cell>0</Table.Cell>;
      })} */}
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>0</Table.Cell>
      <Table.Cell>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Table.Cell>
    </Table.Row>
  );
};

export default TimesheetTableRow;

interface TimesheetTableRowProps {
  week: number[];
}
