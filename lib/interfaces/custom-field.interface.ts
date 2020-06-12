export interface CustomField<T = unknown | unknown[]> {
  status?: string;
  status_type?: string;
  id?: string;
  name?: string;
  type?: string;
  type_config?: Record<string, unknown>;
  hide_from_guests?: boolean;
  v1_field?: boolean;
  value_deleted?: string;
  value: T;
}

