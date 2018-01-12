import { setup } from '../setup';
import { User } from '../../src/model/user';
import { Room } from '../../src/model/room';
import { Rating } from '../../src/model/rating';
import { Faker } from '../faker';

import * as assert from 'assert';

setup();

describe("Rating model tests", () => {
    it("Get room by findByUserAndRoom method", async (done) => {
        let rating: Rating​​ = await Faker.rating();

        let results = await Rating.findByUserAndRoom(rating.userId, rating.roomId);
        
        assert(results[0].getId());
        assert.equal(results[0].label, rating.label);
        assert.equal(results[0].value, rating.value);
        assert.equal(results[0].type, rating.type);
        assert.equal(results[0].userId, rating.userId);
        assert.equal(results[0].roomId, rating.roomId);
        done();
    });
});