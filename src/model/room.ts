import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';

export class Room extends ActiveRecord {
    title: string;
    description: string;
    creator_id: string;

    constructor() {
        super(RoomMapper.get());
    }

    public static async findWhere(where: string, params: any[]): Promise<Room[]> {
        return await super.selectWhere(RoomMapper.get(), where, params);
    }

    public static async findById(id: number): Promise<Room> {
        return await super.selectById(RoomMapper.get(), id);
    }
}

class RoomMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "room";

    fields = [
        {column: 'title', property: 'title'},
        {column: 'description', property: 'description'}
    ];
    
    createNewInstance() {
        return new Room();
    }

    public static get(): RoomMapper {
        if (RoomMapper.mapper) {
            return RoomMapper.mapper;
        } else {
            RoomMapper.mapper = new RoomMapper();
            return RoomMapper.mapper;
        }
    }
}