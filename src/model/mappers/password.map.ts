import { EntityMapper } from '../../persistence/entityMapper';
import { Password } from '../password';

export class PasswordMapper implements EntityMapper {
    
    table: string = "password";

    fields = [
        {column: 'secret', property: 'secret'},
        {column: 'user_id', property: 'userId'}
    ];

    createNewInstance() {
        return new Password();
    }

    validate(password: Password): void {
    
    }

}