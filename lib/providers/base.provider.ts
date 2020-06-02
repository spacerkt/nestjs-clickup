import { Inject } from '@nestjs/common';
import { CLICKUP_OPTIONS } from '../clickup.constants';
import { ClickUpModuleOptions } from '../interfaces/clickup.interface';

export class BaseProvider {
  protected headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    @Inject(CLICKUP_OPTIONS) private readonly options: ClickUpModuleOptions,
  ) {
    this.headers.set('Authorization', this.options.token);
  }
}
