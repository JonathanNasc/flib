import { setup } from '../setup';
import { User } from '../../src/model/user';
import { Room } from '../../src/model/room';
import { Faker } from '../faker';

import * as assert from 'assert';
import { RoomUser } from '../../src/model/roomUser';
import { Form } from '../../src/model/form';
import { RoomForm } from '../../src/model/roomForm';

setup();

describe("RoomForm model test", () => {

    it("Set a form in a room", async (done) => {
        let room: Room = await Faker.room();
        let form: Form = await Faker.form();
        let roomUser = new RoomForm(form.getId(), room.getId());
        await roomUser.save();
        assert(roomUser.getId());
        done();
    });

});