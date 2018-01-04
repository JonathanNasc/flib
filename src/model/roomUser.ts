import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { RoomUserMapper } from './mappers/roomUser.map';

export class RoomUser extends ActiveRecord {
    
    userId: number;
    roomId: number;

    private static map = new RoomUserMapper();

    constructor(userId?: number, roomId?: number) {
        super(RoomUser.map);
        this.userId = userId;
        this.roomId = roomId;
    }

}