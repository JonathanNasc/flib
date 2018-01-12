import { setup } from '../setup';
import { Form } from '../../src/model/form';
import { User } from '../../src/model/user';
import { Faker } from '../faker';

import * as assert from 'assert';

setup();

describe("Form model tests", () => {
    it("Get form by findById method", async (done) => {
        let form: Form = await Faker.form();

        let result = await Form.findById(form.getId());
        
        assert(result.getId());
        assert.equal(result.creatorId, form.creatorId);
        assert.equal(result.title, form.title);
        assert.equal(result.description, form.description);
        done();
    });

    it("Get forms by findByUserId method", async (done) => {
        let user: User = await Faker.user();
        await Faker.form(user);
        await Faker.form(user);
        await Faker.form(user);

        let results = await Form.findByUserId(user.getId());
        
        assert.equal(results.length, 3);
        done();
    });
});