import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { RatingMapper } from './mappers/rating.map';

export class Rating extends ActiveRecord {
    
    userId: number;
    fieldId: number;

    private static map = new RatingMapper;

    constructor() {
        super(null);
    }

}
