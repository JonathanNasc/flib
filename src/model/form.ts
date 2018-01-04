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

}