import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Module } from '../interfaces/admin.interface';
import { CreateModuleDto } from '../dto/create-module.dto';
import { GenericResponse } from '@feedback-workspace/api-interfaces';

@Injectable()
export class AdminService {
  constructor(@Inject('ADMIN_MODEL') private readonly adminModel: Model<Module>) { }

  async createModule(createModuleDto: CreateModuleDto): Promise<boolean> {
    const slug = '_' + createModuleDto.name.toLowerCase();
    const payload = {
      ...createModuleDto,
      slug: '_' + createModuleDto.name.toLowerCase()
    }
    const createModule = new this.adminModel(payload)
    return this.checkIfModuleExists(slug).then(async isExists => {
      if (isExists) {
        return true;
      } else {
        await createModule.save().then(val => {
          return false;
        }).catch(err => {
          return true;
        });
      }
    })
  }
  async getAllModule(): Promise<GenericResponse> {
    return await this.adminModel.find().exec();
  }
  async deleteModule(id): Promise<GenericResponse> {
    const deletedFeedback = await this.adminModel.findByIdAndRemove(id);
    return deletedFeedback;
  }
  async checkIfModuleExists(moduleName: string): Promise<boolean> {
    return await this.adminModel.find({ slug: moduleName }).exec().then(async document => {
      if (document.length > 0 && (document[0].slug === moduleName)) {
        return true;
      } else {
        return false
      }
    })
  }
}
