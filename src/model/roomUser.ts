import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { RoomUserMapper } from './mappers/roomUser.map';

export class RoomUser extends ActiveRecord {
    
    userId: number;
    roomId: number;
    completed: boolean;

    private static map = new RoomUserMapper();

    constructor(userId?: number, roomId?: number) {
        super(RoomUser.map);
        this.userId = userId;
        this.roomId = roomId;
    }

    public static async findByUserAndRoom(userId: number, roomId:number): Promise<RoomUser> {
        let results = await super.selectWhere(
            RoomUser.map,
            "user_id = ? and room_id = ?",
            [userId, roomId]);

        return results && results.length > 0 ? results[0] : null;
    }

    public static async findWhere(where: string, params: Array<any>): Promise<RoomUser[]> {
        return await super.selectWhere(RoomUser.map, where, params);
    }

}