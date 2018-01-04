import { EntityMapper } from '../../persistence/entityMapper';
import { Field } from '../field';

export class FieldMapper implements EntityMapper {
        
    table: string = "field";

    fields = [
        {column: 'label', property: 'label'},
        {column: 'form_id', property: 'formId'},
        {column: 'type', property: 'type'}
    ];
    
    createNewInstance() {
        return new Field();
    }

    validate(field: Field): void {

    }

}