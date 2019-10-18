import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersService } from '../user/service/user.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy,UsersService],
  controllers: [AuthController]
})
export class AuthModule { }
