import { addDays, startOfWeek } from 'date-fns';
import { useEffect, useState } from 'react';
import { Tab } from 'semantic-ui-react';
import ProjectContainer from './ProjectContainer';
import TimesheetTable from './TimesheetTable';

const TabExampleVerticalTabular = () => {
  const panes = [
    {
      menuItem: 'TIMESHEET',
      render: () => (
        <Tab.Pane>
          <h1>Tab 1 Content </h1>
          <TimesheetTable weekDays={daysOfWeek} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'PROJECTS',
      render: () => (
        <Tab.Pane>
          <ProjectContainer />
        </Tab.Pane>
      ),
    },
    { menuItem: 'REPORTS', render: () => <Tab.Pane>Display reports</Tab.Pane> },
  ];
  const [daysOfWeek, setDaysOfWeek] = useState<Date[]>([]);

  useEffect(() => {
    setDaysOfWeek(getCurrentWeekDays());
    console.log(daysOfWeek);
  }, []);

  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};
export default TabExampleVerticalTabular;

const getCurrentWeekDays = () => {
  const today = new Date();
  const firstDay = startOfWeek(today, { weekStartsOn: 0 });
  const week = [firstDay];

  for (let index = 0; index < 6; index++) {
    week.push(addDays(week[index], 1));
  }
  return week;
};
