import { BaseProvider } from './base.provider';
import { Injectable } from '@nestjs/common';
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
    const res = await fetch(url, { method: 'GET', headers: this.headers });
    return res.json();
  }

  async fetchAll(listId: number): Promise<TaskEntity[]> {
    const res = await fetch(this.baseUrl(listId), {
      method: 'GET',
      headers: this.headers,
    });
    return res.json();
  }

  async create(listId: number, payload: TaskPayload): Promise<TaskEntity> {
    const res = await fetch(this.baseUrl(listId), {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(payload),
    });
    return res.json();
  }

  async update(
    listId: number,
    taskId: number,
    payload: TaskPayload,
  ): Promise<TaskEntity> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(payload),
    });
    return res.json();
  }

  async destroy(listId: number, taskId: number): Promise<void> {
    const url = `${this.baseUrl(listId)}/${taskId}`;
    await fetch(url, { method: 'DELETE', headers: this.headers });
  }
}
