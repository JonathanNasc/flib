import { setup } from '../setup';
import { RoomUser } from '../../src/model/roomUser';
import { User } from '../../src/model/user';
import { Room } from '../../src/model/room';
import { Form } from '../../src/model/form';
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

        let result = await serivice.getRoomsOfUser(user.getId());
        assert.equal(result.length, 2);
        assert(result[0].id);
        assert(result[0].description);
        assert(result[0].participants);
        assert(result[0].status);
        assert(result[0].date);
        done();
    });

    it("Test get a room", async (done) => {
        let room: Room = await Faker.room()

        let result = await serivice.getRoom(room.getId());
        assert.equal(result.id, room.getId());
        assert.equal(result.description, room.description);
        done();
    });

    it("Test add a room", async (done) => {
        let room: Room = await Faker.room();
        let user: User = await Faker.user();
        let form: Form = await Faker.form();

        await serivice.addRoom({
            creatorId: user.getId(),
            configs: null,
            title: "test",
            description: "should not fail",
            formId: form.getId(),
            participants: [
                {name: user.name, email: user.email},
                {name: 'John', email: 'john@snow.com'},
                {name: 'Dani', email: 'dani@targaeryan.com'},
                {name: 'Tyrion', email: 'tyrion@lanister.com'},
            ],
            mode: "bla"
        });

        let results = await Room.findByUser(user.getId());
        
        assert(results[0]);
        assert.equal(results[0].title, "test");
        done();
    });

});