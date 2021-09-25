import { FC } from 'react';
import { Table } from 'semantic-ui-react';

const TimesheetTableHeaders: FC<TimesheetTableHeadersProps> = ({
  weekDays,
}) => {
  return (
    <Table.Header>
      <Table.Row>
        {weekDays.map((day) => (
          <Table.HeaderCell>{`${day.toString().substring(0, 3)}, ${day
            .toString()
            .substring(4, 10)}`}</Table.HeaderCell>
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
