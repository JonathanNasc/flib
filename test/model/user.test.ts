import { setup } from '../setup';
import { User } from '../../src/model/user';

import * as assert from 'assert';
import { Faker } from '../faker';
import { Password } from '../../src/model/password';
import { Token } from '../../src/model/token';

setup();

describe("User model tests", () => {
    it("Get user by findWhere method", async (done) => {
        let user: User = await Faker.user();
        let results = await User.findWhere("email = ?", [user.email]);
        
        assert(results[0].getId());
        assert.equal(results[0].name, user.name);
        assert.equal(results[0].email, user.email);
        assert.equal(results[0].imgUrl, user.imgUrl);
        assert.equal(results[0].loginType, user.loginType);
        done();
    });

    it("Get user by find method", async (done) => {
        let user: User = await Faker.user();
        let query = "select * from user where email = ? and name = ?";
        let results = await User.find(query, [user.email, user.name]);

        assert(results[0].getId());
        assert.equal(results[0].name, user.name);
        assert.equal(results[0].email, user.email);
        assert.equal(results[0].imgUrl, user.imgUrl);
        assert.equal(results[0].loginType, user.loginType);
        done();
    });

    it("Get user by findById method", async (done) => {
        let user: User = await Faker.user();
        let result = await User.findById(user.getId());

        assert(result.getId());
        assert.equal(result.name, user.name);
        assert.equal(result.email, user.email);
        assert.equal(result.imgUrl, user.imgUrl);
        assert.equal(result.loginType, user.loginType);
        done();
    });

    it("Update user", async (done) => {
        let user: User = await Faker.user();
        user.email = Faker.email();
        user.name = Faker.personalName();
        user.imgUrl = "http://test.com/img.jpg";
        user.loginType = "email";
        user.save();
        
        let result = await User.findById(user.getId());

        assert(result.getId());
        assert.equal(result.name, user.name);
        assert.equal(result.email, user.email);
        assert.equal(result.imgUrl, user.imgUrl);
        assert.equal(result.loginType, user.loginType);
        done();
    });

    it("Get user password", async (done) => {
        let user: User = await Faker.user();
        let password: Password = new Password();
        password.userId = user.getId();
        password.secret = "qweqwe";
        await password.save();
        
        let result = await user.getPassword();

        assert.equal(password.secret, result);
        done();
    });

    it("Get user by token", async (done) => {
        let user: User = await Faker.user();
        let token: Token = new Token();
        token.userId = user.getId();
        token.hash = "qwertyuiopasdfghjklzxcvbnm";
        await token.save();
        
        let result: User = await User.findByToken(token.hash);
        let resultEmpty: User = await User.findByToken("123");

        assert.equal(user.getId(), result.getId());
        assert.equal(user.name, result.name);
        assert.equal(null, resultEmpty);
        done();
    });
});