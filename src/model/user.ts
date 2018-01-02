import { ActiveRecord } from "../persistence/activeRecord";
import { EntityMapper } from "../persistence/entityMapper";

export class User extends ActiveRecord {

    public name: string;
    public email: string;

    constructor() {
        super(UserMapper.get());
    }

    public toJson(): any {
        return {
            id: this.getId(),
            name: this.name,
            email: this.email,
            createdAt: this.getCreatedAt(),
            updatedAt: this.getUpdatedAt()
        }
    }

    public static async find(sql: string, params: any[]): Promise<User[]> {
        return await super.select(UserMapper.get(), sql, params);
    }

    public static async findWhere(where: string, params: any[]): Promise<User[]> {
        return await super.selectWhere(UserMapper.get(), where, params);
    }

    public static async findById(id: number): Promise<User> {
        return await super.selectById(UserMapper.get(), id);
    }
}

class UserMapper implements EntityMapper {
    
    private static mapper: EntityMapper;
    
    table: string = "user";

    fields = [
        {column: 'name', property: 'name'},
        {column: 'email', property: 'email'}
    ];
    
    createNewInstance() {
        return new User();
    }

    public static get(): UserMapper {
        if (UserMapper.mapper) {
            return UserMapper.mapper;
        } else {
            UserMapper.mapper = new UserMapper();
            return UserMapper.mapper;
        }
    }
}

