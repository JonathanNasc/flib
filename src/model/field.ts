import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { FieldMapper } from './mappers/field.map';

export class Field extends ActiveRecord {
    
    lable: string;
    formId: number;
    type: string;

    private static map = new FieldMapper();

    constructor() {
        super(Field.map);
    }

}
