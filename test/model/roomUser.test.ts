import { setup } from '../setup';
import { User } from '../../src/model/user';
import { Room } from '../../src/model/room';
import { Faker } from '../faker';

import * as assert from 'assert';
import { RoomUser } from '../../src/model/roomUser';

setup();

describe("RoomUser model test", () => {

    it("Put user in room", async (done) => {
        let room: Room = await Faker.room();
        let user: User = await Faker.user();
        let roomUser = new RoomUser(user.getId(), room.getId());
        await roomUser.save();

        assert(roomUser.getId());
        done();
    });

});