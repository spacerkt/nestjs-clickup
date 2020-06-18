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

  async fetch(listId: number, taskId: number): Promise<TaskEntity> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    const res = await this.axios.get(url);
    return res.data;
  }

  async fetchAll(listId: number): Promise<TaskEntity[]> {
    const res = await this.axios.get(this.baseUrl(listId));
    return res.data.tasks;
  }

  async create(listId: number, payload: TaskPayload): Promise<TaskEntity> {
    const res = await this.axios.post(this.baseUrl(listId), payload);
    return res.data;
  }

  async update(
    listId: number,
    taskId: number,
    payload: TaskPayload,
  ): Promise<TaskEntity> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    const res = await this.axios.put(url, payload);
    return res.data;
  }

  async destroy(listId: number, taskId: number): Promise<void> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    await this.axios.delete(url);
  }
}
