import { ActiveRecord } from "./activeRecord";

export interface EntityMapper {
    
    /**
    * Entity name
    */
    table: string;

    /**
    * An array with the relation 
    * of the column name and the model property
    */
    fields: Array<{column: string, property: string}>;

    /**
     * The class of model
     */
    createNewInstance(): any;

}