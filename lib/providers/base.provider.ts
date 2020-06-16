import { Inject } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CLICKUP_OPTIONS } from '../clickup.constants';
import { ClickUpModuleOptions } from '../interfaces/clickup.interface';

export abstract class BaseProvider {
  protected axios: AxiosInstance;
  constructor(
    @Inject(CLICKUP_OPTIONS) private readonly options: ClickUpModuleOptions,
  ) {
    if (!this.options.token) {
      throw Error('Missing ClickUp Token');
    }
    this.axios = axios.create({
      headers: {
        Authorization: this.options.token,
      },
    });
  }
}
