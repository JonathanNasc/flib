import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { FormMapper } from './mappers/form.map';

export class Form extends ActiveRecord {
    
    title: string;
    description: string;
    creatorId: number;

    private static map = new FormMapper();

    constructor() {
        super(Form.map);
    }

    public static async findById(id: number): Promise<Form> {
        return await super.selectById(Form.map, id);
    }

    public static async findByUserId(userId: number): Promise<Array<Form>> {
        return await super.selectWhere(Form.map, "creator_id = ?", [userId]);
    }

}