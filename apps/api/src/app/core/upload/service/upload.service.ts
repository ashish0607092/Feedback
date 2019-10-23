import { Injectable, UploadedFile } from '@nestjs/common';
import { AdminService } from '../../../features/admin/service/admin.service';
const fs = require('fs');
const csv = require('csv-parser');

@Injectable()
export class UploadService {
  isDone = false;
  constructor(public adminService: AdminService) { }

  async uploadFile(file) {
    return await this.readUploadedFile(file);
  }

  async readUploadedFile(file) {
    const self = this;
    fs.createReadStream('./csvFiles/' + file.filename)
      .pipe(csv({
        mapHeaders: ({ header }) => header.toLowerCase().trim()
      }))
      .on('data', function (data) {
        try {
          self.adminService.createModule({
            name: data.modulename,
            desc: data.moduledescription,
            colorCode: data.modulecolor
          });
        }
        catch (err) {
        }
      })
      .on('end', async function () {
        self.isDone = true;
      });
    return await self.isDone;
  }
}
