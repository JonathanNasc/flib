import { setup } from '../setup';
import { Field } from '../../src/model/field';
import { Form } from '../../src/model/form';
import { Faker } from '../faker';

import * as assert from 'assert';

setup();

describe("Field model tests", () => {
    it("Get fields by findByFormId method", async (done) => {
        let form: Form = await Faker.form();
        await Faker.field(form);
        await Faker.field(form);
        await Faker.field(form);

        let results = await Field.findByFormId(form.getId());
        
        assert.equal(results.length, 3);
        done();
    });

});