import { EntityMapper } from '../../persistence/entityMapper';
import { Token } from '../token';

export class TokenMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "token";

    fields = [
        {column: 'hash', property: 'hash'},
        {column: 'user_id', property: 'userId'}
    ];
    
    createNewInstance() {
        return new Token();
    }

    validate(token: Token): void {

    }
}