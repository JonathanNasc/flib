import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { RoomFormMapper } from './mappers/roomForm.map';

export class RoomForm extends ActiveRecord {
    
    formId: number;
    roomId: number;

    private static map = new RoomFormMapper();

    constructor(formId?: number, roomId?: number) {
        super(RoomForm.map);
        this.formId = formId;
        this.roomId = roomId;
    }

}
