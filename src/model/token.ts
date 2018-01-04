import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { User } from './user';
import { TokenMapper } from './mappers/token.map';

export class Token extends ActiveRecord {
    
    hash: string;
    userId: number;

    private static map = new TokenMapper();

    constructor() {
        super(Token.map);
    }

}
