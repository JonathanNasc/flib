import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { PasswordMapper } from './mappers/password.map';

export class Password extends ActiveRecord {
    
    secret: string;
    userId: number;

    private static map = new PasswordMapper();

    constructor() {
        super(Password.map);
    }

    public static async findByUserId(userId: number): Promise<string> {
        let results: Password[] = await super
            .selectWhere(Password.map, "user_id = ?", [userId]);

        if (results && results.length > 0) {
            return results[0].secret;
        }
    }
}