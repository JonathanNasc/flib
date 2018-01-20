import { Room } from '../model/room';
import { User } from '../model/user';
import { RoomUser } from '../model/roomUser';
import { Validator } from '../utils/validator';

export class RoomService {

    public async getRoomsOfUser(userId: number) {
        let rooms = await Room.findByUser(userId);
        let responseMap = [];
        for (let room of rooms) {
            responseMap.push({
                id: room.getId(),
                title: room.title,
                description: room.description,
                participants: await room.getParticipantsExceptOne(userId),
                status: await room.getStatusToUser(userId),
                date: room.getCreatedAt()
            })
        }
        return responseMap;
    }

    public async getRoom(roomId: number) {
        let room = await Room.findById(roomId);
        return {
            id: room.getId(),
            title: room.title,
            description: room.description,
            date: room.getCreatedAt(),
            form: {}
        } 
    }

    public async addRoom(params: RoomCreationParams) {
        this.validadeCreation(params);
        let room: Room = new Room();
        room.creatorId = params.creatorId;
        room.description = params.description;
        room.title = params.title;
        room.formId = params.formId;
        await room.save();
        await this.addParticipantsToRoom(params.participants, room.getId())
    }

    private async addParticipantsToRoom(participants: Participant[], roomId: number) {
        for (let participant of participants) {
            let user: User = await User.findByEmail(participant.email);
            if (!user) {
                user = new User();
                user.name = participant.name;
                user.email = participant.email;
                user.imgUrl = participant.email;
                user.loginType = User.LOGIN_GUEST;
                await user.save();
            }
            let userRoom = new RoomUser(user.getId(), roomId);
            await userRoom.save();
        }
    }

    private async validadeCreation(params: RoomCreationParams) {
        Validator.isNotEmpty(params.creatorId, "A creator is required");
        Validator.isNotEmpty(params.description, "A description is required");
        Validator.isNotEmpty(params.title, "A title is required");
        Validator.isNotEmpty(params.formId, "A form is required");
        Validator.isNotEmpty(params.mode, "A mode is required");
        Validator.isNotEmpty(params.participants, "Participants are required");
        Validator.arrayIsGreaterThen(params.participants, 3, "At least three participants are required");
        for (let participant of params.participants) {
            Validator.isNotEmpty(participant.email, "All participants should have an email");
            Validator.isNotEmpty(participant.name, "All participants should have a name");
        }
    }
}

class RoomCreationParams {
    participants: Participant[];
    title: string;
    description: string;
    mode: string;
    creatorId: number;
    formId: number;
    configs: {maxCheckedItems: number};
}

class Participant {
    name: string;
    email: string;
    imageUrl?: string;
}
