import { User } from '../src/model/user';
import { Room } from '../src/model/room';
import { Random } from '../src/utils/random';
import { Form } from '../src/model/form';

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
        let room = new Room();
        room.creatorId = user.getId();
        room.title = "Test room";
        room.description = "Room description";
        await room.save();
        return room;
    }

    public static async form(): Promise<Form> {
        let form = new Form();
        form.title = 'Personal Attr';
        form.description = 'Evaluation of uor personal skils';
        form.creatorId = (await Faker.user()).getId();
        await form.save();
        return form;
    }

    public static personalName(): string {
        let first = Random.string(nameHub.first);
        let second = Random.string(nameHub.secont);
        let third = Random.string(nameHub.third);
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
