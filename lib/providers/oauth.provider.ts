/* eslint @typescript-eslint/camelcase: 0 */
import { Inject, Injectable } from '@nestjs/common';
import { BASE_URL, CLICKUP_OPTIONS } from '../clickup.constants';
import { TokenProviderError } from '../errors/token-provider.error';
import { ClickUpModuleOptions } from '../interfaces';
import { ClickUpOAuthCredentials } from '../interfaces/clickup-oauth-credentials.interface';
import { ClickUpTokenResult } from '../interfaces/clickup-token-result.dto';
import { BaseProvider } from './base.provider';

@Injectable()
export class OAuthProvider extends BaseProvider {
  private readonly credentials: ClickUpOAuthCredentials | null;
  constructor(@Inject(CLICKUP_OPTIONS) options: ClickUpModuleOptions) {
    super(options);
    this.credentials =
      options.clientId && options.secret
        ? { client_secret: options.secret, client_id: options.clientId }
        : null;
  }

  private baseUrl(): string {
    return `${BASE_URL}/oauth`;
  }

  token(code: string): Promise<ClickUpTokenResult> {
    if (!this.credentials) {
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
