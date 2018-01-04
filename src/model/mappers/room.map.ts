import { EntityMapper } from '../../persistence/entityMapper';
import { Room } from '../room';

export class RoomMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "room";

    fields = [
        {column: 'title', property: 'title'},
        {column: 'description', property: 'description'},
        {column: 'creator_id', property: 'creatorId'}
    ];
    
    createNewInstance() {
        return new Room();
    }

    validate(room: Room):void {

    }
}