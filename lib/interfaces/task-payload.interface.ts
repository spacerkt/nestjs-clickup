import { TaskPriority } from '../enums/task-priority.enum';

interface CustomField {
  status: string;
  status_type: string;
  id: string;
  name: string;
  type: string;
  type_config: Record<string, unknown>;
  hide_from_guests: boolean;
  v1_field: boolean;
  value_deleted: string;
}

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
  custom_fields: CustomField[];
}
