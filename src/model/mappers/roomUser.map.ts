import { EntityMapper } from '../../persistence/entityMapper';
import { RoomUser } from '../roomUser';

export class RoomUserMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "room_user";

    fields = [
        {column: 'user_id', property: 'userId'},
        {column: 'room_id', property: 'roomId'},
        {column: 'completed', property: 'completed', type: 'boolean'}
    ];
    
    createNewInstance() {
        return new RoomUser();
    }

    validate(roomUser: RoomUser): void {

    }
}