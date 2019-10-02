import { Controller, Get, Post, Body } from '@nestjs/common';
import { Feedback } from '../interfaces/feedback.interface';
import { FeedbackService } from '../service/feedback.service';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { GenericResponse } from '../../../common/model/generic.response';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) { }

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    this.feedbackService.create(createFeedbackDto);
  }

  @Get()
  async findAll(): Promise<GenericResponse> {
    return this.feedbackService.findAll();
  }
}
