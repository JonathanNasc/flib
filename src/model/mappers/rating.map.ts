import { EntityMapper } from '../../persistence/entityMapper';
import { Rating } from '../rating';

export class RatingMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "rating";

    fields = [
        {column: 'user_id', property: 'userId'},
        {column: 'room_id', property: 'roomId'},
        {column: 'label', property: 'label'},
        {column: 'type', property: 'type'},
        {column: 'value', property: 'value'}
    ];
    
    createNewInstance() {
        return new Rating();
    }

    validate(rating: Rating): void {
        
    }

}