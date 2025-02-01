import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'AppService - getHello';
  }
  postHello(): string {
    return 'AppService - postHello';
  }
  putHello(): string {
    return 'AppService - putHello';
  }
  deleteHello(): string {
    return 'AppService - deleteHello';
  }
}
