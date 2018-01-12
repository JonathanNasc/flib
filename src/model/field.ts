import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { FieldMapper } from './mappers/field.map';

export class Field extends ActiveRecord {
    
    label: string;
    formId: number;
    type: string;

    static TYPE_TEXT = "text";
    static TYPE_EVAL = "eval";

    private static map = new FieldMapper();

    constructor() {
        super(Field.map);
    }

    public static async findByFormId(formId: number): Promise<Field[]> {
        return await super.selectWhere(Field.map, "form_id = ?", [formId]);
    }

}
