import { Controller, Get, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { CreateModuleDto } from '../dto/create-module.dto';
import { Response } from 'express';
import { GenericResponse } from '@feedback-workspace/api-interfaces';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post('/module')
  async createModule(@Res() res: Response, @Body() createModuleDto: CreateModuleDto): Promise<GenericResponse> {
    return this.adminService.createModule(createModuleDto).then(isExists => {
      if (isExists) {
        return res.status(HttpStatus.CONFLICT).json({
          data: [],
          message: "Already Exists",
          statusCode: HttpStatus.CONFLICT
        });
      } else {
        return res.status(HttpStatus.CREATED).json({
          data: [],
          message: "Created",
          statusCode: HttpStatus.CREATED
        });
      }
    });
  }

  @Get('/module')
  async getAllModule(@Res() res: Response): Promise<GenericResponse> {
    return res.status(HttpStatus.OK).json({
      data: await this.adminService.getAllModule(),
      message: "OK",
      statusCode: HttpStatus.OK
    });
  }
}
