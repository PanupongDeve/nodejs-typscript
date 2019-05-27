import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';

import DatabaseHelperInterface from '../../interfaces/DatabaseHelperInterface';
import { MongDbServiceConfig } from '../../config';

export class MongooseHelper implements DatabaseHelperInterface {
    connect() {
        mongoose.connect(MongDbServiceConfig.auth_url, { useNewUrlParser: true }, (err: MongoError) => {
            if (err) {
                console.log(err);
            } else {
                console.log('connect database successfully!');
            }
        });
    }
}
