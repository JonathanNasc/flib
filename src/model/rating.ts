import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { RatingMapper } from './mappers/rating.map';

export class Rating extends ActiveRecord {

    userId: number;
    roomId: number;
    label: string;
    type: string;
    value: string;

    private static map = new RatingMapper;

    constructor() {
        super(Rating.map);
    }

    public static async findByUserAndRoom(userId: number, roomId: number): Promise<Array<Rating>> {
        let where = "user_id = ? and room_id = ?";
        let params = [userId, roomId];
        return await super.selectWhere(Rating.map, where, params);
    }

}
