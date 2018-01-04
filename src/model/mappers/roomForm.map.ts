import { EntityMapper } from '../../persistence/entityMapper';
import { RoomForm } from '../roomForm';

export class RoomFormMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "room_form";

    fields = [
        {column: 'form_id', property: 'formId'},
        {column: 'room_id', property: 'roomId'}
    ];
    
    createNewInstance() {
        return new RoomForm();
    }

    validate(roomForm: RoomForm) {

    }
}