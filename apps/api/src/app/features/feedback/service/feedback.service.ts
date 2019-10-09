import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import * as HttpStatus from 'http-status-codes'
import { Feedback, GenericResponse } from '@feedback-workspace/api-interfaces';
@Injectable()
export class FeedbackService {
  constructor(@Inject('FEEDBACK_MODEL') private readonly feedbackModel: Model<Feedback>) { }

  async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const createdFeedback = new this.feedbackModel(createFeedbackDto)
    return await createdFeedback.save();
  }

  async findAllFeedback(): Promise<GenericResponse> {
    return {
      message: HttpStatus.getStatusText(HttpStatus.OK),
      statusCode: HttpStatus.OK,
      data: await this.feedbackModel.find().sort({ timeStamp: -1 }).exec()
    };
  }
  async deleteFeedback(id): Promise<GenericResponse> {
    const deletedFeedback = await this.feedbackModel.findByIdAndRemove(id);
    return deletedFeedback;
  }
}
