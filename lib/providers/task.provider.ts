import { Injectable } from '@nestjs/common';

import { BaseProvider } from './base.provider';
import { TaskPayload } from '../interfaces/task-payload.interface';
import { BASE_URL } from '../clickup.constants';
import { TaskEntity } from '../interfaces/task.entity';

@Injectable()
export class TaskProvider extends BaseProvider {
  private baseUrl(id: number): string {
    return `${BASE_URL}/list/${id}/task`;
  }

  fetch(listId: number, taskId: number): Promise<TaskEntity> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    return new Promise<TaskEntity>((resolve, reject) =>
      this.axios
        .get<TaskEntity>(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err)),
    );
  }

  fetchAll(listId: number): Promise<TaskEntity[]> {
    return new Promise<TaskEntity[]>((resolve, reject) =>
      this.axios
        .get<TaskEntity[]>(this.baseUrl(listId))
        .then(res => resolve(res.data))
        .catch(err => reject(err)),
    );
  }

  create(listId: number, payload: TaskPayload): Promise<TaskEntity> {
    return new Promise<TaskEntity>((resolve, reject) =>
      this.axios
        .post<TaskEntity>(this.baseUrl(listId), payload)
        .then(res => resolve(res.data))
        .catch(err => reject(err)),
    );
  }

  update(
    listId: number,
    taskId: number,
    payload: TaskPayload,
  ): Promise<TaskEntity> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    return new Promise<TaskEntity>((resolve, reject) =>
      this.axios
        .put<TaskEntity>(url, payload)
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
