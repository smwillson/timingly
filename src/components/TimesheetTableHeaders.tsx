import format from 'date-fns/format';
import { FC } from 'react';
import { Table } from 'semantic-ui-react';

const TimesheetTableHeaders: FC<TimesheetTableHeadersProps> = ({
  weekDays,
}) => {
  return (
    <Table.Header>
      <Table.Row>
        {weekDays.map((day) => (
          <Table.HeaderCell>{`${format(day, 'EE, MMM dd')}`}</Table.HeaderCell>
        ))}
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

export default TimesheetTableHeaders;

interface TimesheetTableHeadersProps {
  weekDays: Date[];
}
