import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { AdminController } from './controller/admin.controller';
import { AdminService } from './service/admin.service';
import { moduleProviders } from './admin.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AdminController],
  providers: [AdminService, ...moduleProviders]
})
export class AdminModule { }
