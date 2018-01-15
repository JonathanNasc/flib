import { setup } from '../setup';
import { RoomUser } from '../../src/model/roomUser';
import { User } from '../../src/model/user';
import { Room } from '../../src/model/room';
import { RoomService } from '../../src/room/roomService';
import { Faker } from '../faker';

import * as assert from 'assert';

let serivice = new RoomService();

setup();

describe("RoomService tests", () => {
    it("Test get rooms of a user", async (done) => {
        let user: User = await Faker.user();
        await Faker.roomUser(await Faker.room(), user);
        await Faker.roomUser(await Faker.room(), user);
        await Faker.roomUser(await Faker.room(), user);

        let result = await serivice.getRoomsOfUser(user.getId());
        assert.equal(result.length, 3);
        done();
    });

});