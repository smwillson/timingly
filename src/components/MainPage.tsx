

import { addDays, startOfWeek } from 'date-fns';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Tab } from 'semantic-ui-react';
import { timesheetsAtom } from '../atoms/timesheetAtom';
import { getTimeSheets } from '../requests/event';
import { getCurrentWeekDays } from '../utils/misc';
import ProjectContainer from './ProjectContainer';
import TimesheetTable from './TimesheetTable';

//use atom here to get all the data for the week??
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

  const [timesheets, setTimesheets] = useAtom(timesheetsAtom);
  // const [timesheets, setTimesheets] = useState<Timesheet[] | []>([]);

  useEffect(() => {
    setDaysOfWeek(getCurrentWeekDays());
    console.log('hello¡¡¡');
    getTimeSheets().then((sheets) => {
      setTimesheets(sheets.timesheetsForDate);
    });
  }, [setTimesheets]);

  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  );
};
export default TabExampleVerticalTabular;
