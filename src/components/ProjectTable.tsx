import React, { useReducer } from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';
import {
  Action,
  ActionType,
  ProjectReducer,
  SortableProject,
} from '../types/types';

const ProjectTable = () => {
  const [state, dispatch] = useReducer<
    React.Reducer<SortableProject, ProjectReducer>
  >(projectReducer, {
    column: null,
    data: tableData,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    <div>
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'projectName' ? direction : (null as any)}
              onClick={() =>
                dispatch({
                  type: ActionType.CHANGE_SORT,
                  column: 'projectName',
                })
              }
            >
              Project Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={
                column === 'projectDescription' ? direction : (null as any)
              }
              onClick={() =>
                dispatch({
                  type: ActionType.CHANGE_SORT,
                  column: 'projectDescription',
                })
              }
            >
              Project Description
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(({ projectName, projectDescription }) => (
            <Table.Row key={projectName}>
              <Table.Cell>{projectName}</Table.Cell>
              <Table.Cell>{projectDescription}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProjectTable;

const tableData = [
  { projectName: 'Project1', projectDescription: 'boring project' },
  { projectName: 'Project2', projectDescription: 'terrible project' },
  { projectName: 'Project3', projectDescription: 'hard project' },
  { projectName: 'Project4', projectDescription: 'happy project' },
];
//TODO: figure out the types here
const projectReducer: React.Reducer<any, any> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === Action.ASCENDING
              ? Action.DESCENDING
              : Action.ASCENDING,
        };
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: Action.ASCENDING,
      };
    default:
      throw new Error();
  }
};

const intialState: SortableProject = {
  column: null,
  data: tableData,
  direction: null,
};
