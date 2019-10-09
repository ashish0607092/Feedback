import { Document } from 'mongoose';

export interface Feedback extends Document {
  readonly module: string;
  readonly feedback: string;
  readonly timeStamp?: number;
  readonly feedbackId?: string;
}
