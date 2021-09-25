import { FC } from 'react';
import { Table } from 'semantic-ui-react';

const TimesheetTableHeaders: FC<TimesheetTableHeadersProps> = ({
  weekDays,
}) => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>{`${weekDays[0]}`}</Table.HeaderCell>
        <Table.HeaderCell>{`${weekDays[1]}`}</Table.HeaderCell>
        <Table.HeaderCell>{`${weekDays[2]}`}</Table.HeaderCell>
        <Table.HeaderCell>{`${weekDays[3]}`}</Table.HeaderCell>
        <Table.HeaderCell>{`${weekDays[4]}`}</Table.HeaderCell>
        <Table.HeaderCell>{`${weekDays[5]}`}</Table.HeaderCell>
        <Table.HeaderCell>{`${weekDays[6]}`}</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

export default TimesheetTableHeaders;

interface TimesheetTableHeadersProps {
  weekDays: Date[];
}
