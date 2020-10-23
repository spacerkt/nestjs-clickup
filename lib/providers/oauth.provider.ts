import { Inject, Injectable } from '@nestjs/common';
import { BASE_URL, CLICKUP_OPTIONS } from '../clickup.constants';
import { TokenProviderError } from '../errors/token-provider.error';
import {
  ClickUpModuleOAuthCredentials,
  ClickUpModuleOptions,
} from '../interfaces';
import { ClickUpTokenResult } from '../interfaces/clickup-token-result.dto';
import { BaseProvider } from './base.provider';

@Injectable()
export class OAuthProvider extends BaseProvider {
  private readonly credentials: ClickUpModuleOAuthCredentials;
  constructor(@Inject(CLICKUP_OPTIONS) options: ClickUpModuleOptions) {
    super(options);
    this.credentials = { clientId: options.clientId!, secret: options.secret! };
  }

  private isCredentialsValid(): boolean {
    return !!this.credentials.secret && !!this.credentials.clientId;
  }

  private baseUrl(): string {
    return `${BASE_URL}/oauth`;
  }

  token(code: string): Promise<ClickUpTokenResult> {
    if (!this.isCredentialsValid()) {
      throw new TokenProviderError(
        'Credentials not provided. Please fill clientId and secret info',
      );
    }
    return new Promise<ClickUpTokenResult>((resolve, reject) =>
      this.axios
        .post<ClickUpTokenResult>(this.baseUrl() + '/token', {
          code,
          ...this.credentials,
        })
        .then(res => resolve(res.data))
        .catch(err => reject(err)),
    );
  }
}
