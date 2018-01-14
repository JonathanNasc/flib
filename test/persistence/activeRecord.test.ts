import { setup } from '../setup';
import { RoomUser } from '../../src/model/roomUser';
import { User } from '../../src/model/user';
import { Room } from '../../src/model/room';
import { Faker } from '../faker';

import * as assert from 'assert';

setup();

describe("ActiveRecord tests", () => {
    it("Test boolean converter", async (done) => {
        let user: User = await Faker.user();
        let room: Room = await Faker.room();
        let roomUser: RoomUser = new RoomUser();
        roomUser.userId = user.getId();
        roomUser.roomId = room.getId();
        roomUser.completed = true;
        roomUser.save();

        let results = await RoomUser.findByUserAndRoom(user.getId(), room.getId());
        assert.equal(results[0].completed, true);
        done();
    });

});