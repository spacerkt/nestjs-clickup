import { TaskPriority } from '../enums/task-priority.enum';

export interface TaskEntity {
  id: string;
  name: string;
  status: {
    status: string;
    color: string;
    orderindex: number;
    type: string;
  };
  orderindex: number;
  date_created: number;
  date_updated: number;
  date_closed: number;
  creator: {
    id: number;
    username: string;
    color: string;
    profilePicture: string;
  };
  assignees: number[];
  checklists: any[];
  tags: string[];
  parent: number;
  priority: TaskPriority;
  due_date: number;
  start_date: number;
  time_estimate: number;
  time_spent: number;
  list: {
    id: number;
  };
  folder: {
    id: number;
  };
  space: {
    id: number;
  };
  url: string;
}
