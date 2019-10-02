import { Connection } from 'mongoose';
import { ModuleSchema } from './schema/admin.schema';
import { DBMODEL } from '../../constant/db.model';

export const moduleProviders = [
  {
    provide: DBMODEL.ADMIN_MODEL,
    useFactory: (connection: Connection) => connection.model('Module', ModuleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
