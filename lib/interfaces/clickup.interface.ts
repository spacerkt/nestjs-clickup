import { ModuleMetadata } from '@nestjs/common/interfaces';

export interface ClickUpModuleOptions {
  token: string;
  isGlobal?: boolean;
}

export interface ClickUpAsyncModuleOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => ClickUpModuleOptions | Promise<ClickUpModuleOptions>;
  inject?: any[];
  isGlobal?: boolean;
  debug?: boolean;
}
