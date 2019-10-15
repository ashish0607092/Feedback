import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { FeedbackService } from '../service/feedback.service';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { GenericResponse } from '@feedback-workspace/api-interfaces';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) { }

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    const createFeedbackPayload: CreateFeedbackDto = {
      ...createFeedbackDto,
      timeStamp: new Date().getTime()
    }
    this.feedbackService.createFeedback(createFeedbackPayload);
  }

  @Get()
  async findAllFeedback(): Promise<GenericResponse> {
    return this.feedbackService.findAllFeedback();
  }
  @Delete(':id')
  async deleteFeedback(@Param('id') id: string): Promise<GenericResponse> {
    return this.feedbackService.deleteFeedback(id);
  }
}
