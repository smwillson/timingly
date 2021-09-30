import { string } from 'fp-ts';

export interface ProjectDetails {
  projectName: string;
  projectDescription: string;
}

export enum Action {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export interface SortableProject {
  column: string | null;
  data: ProjectDetails[];
  direction: Action | null;
}

export enum ActionType {
  CHANGE_SORT = 'CHANGE_SORT',
}

export interface ProjectReducer {
  type: ActionType;
  column: string | null;
}
