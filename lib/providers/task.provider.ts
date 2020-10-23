import { Injectable } from '@nestjs/common';

import { BaseProvider } from './base.provider';
import { TaskPayload } from '../interfaces/task-payload.interface';
import { BASE_URL } from '../clickup.constants';
import { TaskClickUp } from '../interfaces/task-clickup.interface';

@Injectable()
export class TaskProvider extends BaseProvider {
  private baseUrl(id: number): string {
    return `${BASE_URL}/list/${id}/task`;
  }

  fetch(listId: number, taskId: number): Promise<TaskClickUp> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    return new Promise<TaskClickUp>((resolve, reject) =>
      this.axios
        .get<TaskClickUp>(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err)),
    );
  }

  fetchAll(listId: number): Promise<TaskClickUp[]> {
    return new Promise<TaskClickUp[]>((resolve, reject) =>
      this.axios
        .get<TaskClickUp[]>(this.baseUrl(listId))
        .then(res => resolve(res.data))
        .catch(err => reject(err)),
    );
  }

  create(listId: number, payload: TaskPayload): Promise<TaskClickUp> {
    return new Promise<TaskClickUp>((resolve, reject) =>
      this.axios
        .post<TaskClickUp>(this.baseUrl(listId), payload)
        .then(res => resolve(res.data))
        .catch(err => reject(err)),
    );
  }

  update(
    listId: number,
    taskId: number,
    payload: TaskPayload,
  ): Promise<TaskClickUp> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    return new Promise<TaskClickUp>((resolve, reject) =>
      this.axios
        .put<TaskClickUp>(url, payload)
        .then(res => resolve(res.data))
        .catch(err => reject(err)),
    );
  }

  destroy(listId: number, taskId: number): Promise<void> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    return new Promise<void>((resolve, reject) =>
      this.axios
        .delete(url)
        .then(() => resolve())
        .catch(err => reject(err)),
    );
  }
}
