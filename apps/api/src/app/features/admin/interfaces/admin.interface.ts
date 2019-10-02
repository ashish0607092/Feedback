
import { Document } from 'mongoose';

export interface Module extends Document {
  readonly name: string;
  readonly desc: string;
  readonly colorCode: string;
  readonly slug: string;
}
