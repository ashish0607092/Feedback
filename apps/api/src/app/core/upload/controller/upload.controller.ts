import { Controller, Post, UseInterceptors, UploadedFile, Res, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadService } from '../service/upload.service';
import { Response } from 'express';

@Controller('upload')
export class UploadController {
  constructor(public uploadService: UploadService) { }
  @Post('')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './csvFiles',
      filename: (req, file, cb) => {
        return cb(null, `${file.originalname}`)
      }
    })
  }))
  uploadFile(@UploadedFile() file, @Res() res: Response) {
    return this.uploadService.uploadFile(file).then(val => {
      if (val === true) {
        return res.status(HttpStatus.OK).json({
          message: "OK",
          statusCode: HttpStatus.OK
        });
      } else {
        return res.status(HttpStatus.OK).json({
          message: "OK",
          statusCode: HttpStatus.OK
        });
      }
    });
  }
}
