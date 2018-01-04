import { EntityMapper } from '../../persistence/entityMapper';
import { Rating } from '../rating';

export class RatingMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "rating";

    fields = [
        {column: 'user_id', property: 'userId'},
        {column: 'field_id', property: 'fieldId'}
    ];
    
    createNewInstance() {
        return new Rating();
    }

    validate(rating: Rating): void {
        
    }

}