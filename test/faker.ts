import { User } from '../src/model/user';
import { Room } from '../src/model/room';
import { Form } from '../src/model/form';
import { Field } from '../src/model/field';
import { Rating } from '../src/model/rating';
import { Random } from '../src/utils/random';
import { RoomUser } from '../src/model/roomUser';

export class Faker {

    public static async user(): Promise<User> {
        let userName = Faker.personalName();
        let user: User = new User();
        user.email = Faker.email(userName);
        user.name = userName;
        user.imgUrl = "http://image.com/sample.jpg";
        user.loginType = "email";
        await user.save();
        return user;
    }

    public static async room(): Promise<Room> {
        let user = await Faker.user();
        let form = await Faker.form();
        let room = new Room();
        room.creatorId = user.getId();
        room.title = "Test room";
        room.description = "Room description";
        room.formId = form.getId();
        await room.save();
        return room;
    }

    public static async rating(): Promise<Rating> {
        let room: Room = await Faker.room();
        let user = await Faker.user();
        let rating: Rating = new Rating();
        rating.label = "tmp";
        rating.type = Field.TYPE_TEXT;
        rating.roomId = room.getId();
        rating.userId = user.getId();
        rating.value = Faker.text();
        await rating.save();
        return rating;
    }

    public static async form(user?: User): Promise<Form> {
        user = user || await Faker.user();
        let form: Form = new Form();
        form.title = "Form test";
        form.description = Faker.text();
        form.creatorId = user.getId();
        await form.save();
        return form;
    }

    public static async field(form?: Form): Promise<Field> {
        form = form || await Faker.form();
        let field: Field = new Field()
        field.formId = form.getId();
        field.label = "Lable test";
        field.type = Field.TYPE_TEXT;
        await field.save();
        return field;
    }

    public static async roomUser(room: Room, user: User) {
        let roomUser: RoomUser = new RoomUser();
        roomUser.userId = user.getId();
        roomUser.roomId = room.getId();
        await roomUser.save();
        return roomUser;
    }

    public static personalName(): string {
        let first = Random.string(nameHub.first);
        let second = Random.string(nameHub.secont);
        let third = Random.string(nameHub.third);
        return `${first} ${second} ${third}`;
    }

    public static text(): string {
        let first = Random.string(textHub.first);
        let second = Random.string(textHub.secont);
        let third = Random.string(textHub.third);
        return `${first} ${second} ${third}`;
    }

    public static email(name = "ws"): string {
        return `${name}${Random.int(9999)}@email-fake.com`; 
    }
}

let textHub = {
    first: ["I never", "Why do you always", "Sometimes we", "When will we"],
    secont: ["worry about", "leave", "get out of", "take care of"],
    third: ["the World", "my sockets", "videogames", "Tarantino's universe"]
 }

 let nameHub = {
    first: ["John", "Mary", "Ana", "Marta"],
    secont: ["J. K.", "W.", "J.", ""],
    third: ["Stone", "Smith", "Silva", "Snow"]
 }
