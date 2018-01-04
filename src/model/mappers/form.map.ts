import { EntityMapper } from '../../persistence/entityMapper';
import { Form } from '../form';

export class FormMapper implements EntityMapper {
       
    table: string = "form";

    fields = [
        {column: 'title', property: 'title'},
        {column: 'description', property: 'description'},
        {column: 'creator_id', property: 'creatorId'}
    ];
    
    createNewInstance() {
        return new Form();
    }

    validate(form: Form):void {

    }

}