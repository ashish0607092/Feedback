import { Module } from '@nestjs/common';
import { UsersService } from './service/user.service';
import { UsersController } from './controller/user.controller';

@Module({
  controllers: [UsersController]
})
export class UsersModule {}
