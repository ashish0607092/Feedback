import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { Feedback } from '../interfaces/feedback.interface';
import { GenericResponse } from '../../../common/model/generic.response';
import * as HttpStatus from 'http-status-codes'

@Injectable()
export class FeedbackService {
  constructor(@Inject('FEEDBACK_MODEL') private readonly feedbackModel: Model<Feedback>) { }

  async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const createdFeedback = new this.feedbackModel(createFeedbackDto)
    return await createdFeedback.save();
  }

  async findAll(): Promise<GenericResponse> {
    return {
      message: HttpStatus.getStatusText(HttpStatus.OK),
      statusCode: HttpStatus.OK,
      data: await this.feedbackModel.find().exec()
    };
  }
}
