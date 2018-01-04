import { setup } from '../setup';
import { User } from '../../src/model/user';
import { Room } from '../../src/model/room';
import { Faker } from '../faker';

import * as assert from 'assert';

setup();

describe("Room model tests", () => {
    it("Get room by findWhere method", async (done) => {
        let room: Room = await Faker.room();
        let results = await Room.findWhere("creator_id = ?", [room.creatorId]);
        
        assert(results[0].getId());
        assert.equal(results[0].title, room.title);
        assert.equal(results[0].description, room.description);
        assert.equal(results[0].creatorId, room.creatorId);
        done();
    });

    it("Get room by findById method", async (done) => {
        let room: Room = await Faker.room();
        let result = await Room.findById(room.getId());
        
        assert(result.getId());
        assert.equal(result.title, room.title);
        assert.equal(result.description, room.description);
        assert.equal(result.creatorId, room.creatorId);
        done();
    });

    it("Update room", async (done) => {
        let room: Room = await Faker.room();
        room.title = 'title edited';
        room.description = 'description edited';
        room.save();

        let result = await Room.findById(room.getId());
        
        assert.equal(result.title, room.title);
        assert.equal(result.description, room.description);
        assert.equal(result.creatorId, room.creatorId);
        done();
    });
});