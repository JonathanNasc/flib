import { setup } from '../setup';
import { User } from '../../src/model/user';
import { Faker } from '../faker';
import { Password } from '../../src/model/password';

import * as assert from 'assert';

setup();

describe("Password model tests", () => {
    
    it("Get password by findByUserId method", async (done) => {
        let user = await Faker.user();
        let password: Password = new Password();
        password.userId = user.getId();
        password.secret = "abcdefghi";
        await password.save();

        let result = await Password.findByUserId(user.getId());
        
        assert(password.secret, result);
        done();
    });

    it("Update password", async (done) => {
        let user = await Faker.user();
        let password: Password = new Password();
        password.userId = user.getId();
        password.secret = "abcdefghi";
        await password.save();

        password.secret = "12345678";
        await password.save();

        let result = await Password.findByUserId(user.getId());
        
        assert(password.secret, result);
        done();
    });

});