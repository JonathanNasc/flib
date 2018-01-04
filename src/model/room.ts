import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { RoomMapper } from './mappers/room.map';

export class Room extends ActiveRecord {
    
    title: string;
    description: string;
    creatorId: number;

    private static map = new RoomMapper();

    constructor() {
        super(Room.map);
    }

    public static async findWhere(where: string, params: any[]): Promise<Room[]> {
        return await super.selectWhere(Room.map, where, params);
    }

    public static async findById(id: number): Promise<Room> {
        return await super.selectById(Room.map, id);
    }
}
