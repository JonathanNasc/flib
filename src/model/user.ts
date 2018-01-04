import { ActiveRecord } from "../persistence/activeRecord";
import { EntityMapper } from '../persistence/entityMapper';
import { Password } from './password';
import { UserMapper } from './mappers/user.map';

export class User extends ActiveRecord {

    name: string;
    email: string;
    loginType: string;
    imgUrl: string;

    private static map = new UserMapper();

    constructor() {
        super(User.map);
    }

    public toJson(): any {
        return {
            id: this.getId(),
            name: this.name,
            email: this.email
        }
    }

    public async getPassword(): Promise<string> {
        if (!this.getId()) return null;

        return await Password.findByUserId(this.getId());
    }

    public static async findByToken(hash: string): Promise<User> {
        let query = `select u.* 
            from user u 
            join token ut on u.id = ut.user_id 
            where ut.hash = ?`;

        let results = await super.select(User.map, query, [hash]);
        if (results && results.length > 0) {
            return results[0];
        }
        return null;
    }

    public static async find(sql: string, params: any[]): Promise<User[]> {
        return await super.select(User.map, sql, params);
    }

    public static async findWhere(where: string, params: any[]): Promise<User[]> {
        return await super.selectWhere(User.map, where, params);
    }

    public static async findById(id: number): Promise<User> {
        return await super.selectById(User.map, id);
    }
}
