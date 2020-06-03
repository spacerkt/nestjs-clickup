import { Inject } from '@nestjs/common';
import { CLICKUP_OPTIONS } from '../clickup.constants';
import { ClickUpModuleOptions } from '../interfaces/clickup.interface';

export abstract class BaseProvider {
  protected headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  constructor(
    @Inject(CLICKUP_OPTIONS) private readonly options: ClickUpModuleOptions,
  ) {
    this.headers['Authorization'] = this.options.token;
  }
}
