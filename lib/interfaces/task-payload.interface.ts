import { TaskPriority } from '../enums/task-priority.enum';
import { CustomField } from './custom-field.interface';

export interface TaskPayload {
  name: string;
  content?: string;
  priority?: TaskPriority;
  tags?: string[];
  parent?: number;
  assignees?: number[];
  notify_all?: boolean;
  due_date?: number;
  due_date_time?: boolean;
  time_estimate?: number;
  start_date?: number;
  start_date_time?: boolean;
  custom_fields?: CustomField[];
}
