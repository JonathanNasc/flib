import { Room } from '../model/room';

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
}