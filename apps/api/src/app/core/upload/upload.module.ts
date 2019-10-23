import { Module } from '@nestjs/common';
import { UploadController } from './controller/upload.controller';
import { UploadService } from './service/upload.service';
import { AdminService } from '../../features/admin/service/admin.service';
import { moduleProviders } from '../../features/admin/admin.provider';
import { DatabaseModule } from '../../common/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [UploadController],
  providers: [UploadService, AdminService, ...moduleProviders]
})
export class UploadModule { }
