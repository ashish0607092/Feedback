import { Connection } from 'mongoose';
import { FeedBackSchema } from './schema/feedback.schema';
import { DBMODEL } from '../../constant/db.model';

export const feedbackProviders = [
  {
    provide: DBMODEL.FEEDBACK_MODEL,
    useFactory: (connection: Connection) => connection.model('Feedback', FeedBackSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
