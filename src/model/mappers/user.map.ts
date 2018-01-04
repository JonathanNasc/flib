import { EntityMapper } from '../../persistence/entityMapper';
import { User } from '../user';

export class UserMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "user";

    fields = [
        {column: 'name', property: 'name'},
        {column: 'email', property: 'email'},
        {column: 'login_type', property: 'loginType'},
        {column: 'img_url', property: 'imgUrl'}
    ];
    
    createNewInstance() {
        return new User();
    }

    validate(user: User): void {

    }
}

