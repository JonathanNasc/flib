import { ActiveRecord } from '../persistence/activeRecord';
import { EntityMapper } from '../persistence/entityMapper';
import { RoomMapper } from './mappers/room.map';
import { User } from './user';
import { RoomUser } from './roomUser';

export class Room extends ActiveRecord {
    
    title: string;
    description: string;
    creatorId: number;
    formId: number;

    static STATUS_PENDENT = 'pendent';
    static STATUS_WAITING = 'waiting';
    static STATUS_COMPLETED = 'completed';

    private static map = new RoomMapper();

    constructor() {
        super(Room.map);
    }

    public static async findWhere(where: string, params: any[]): Promise<Room[]> {
        return await super.selectWhere(Room.map, where, params);
    }

    public static async findById(id: number): Promise<Room> {
        return await super.selectById(Room.map, id);
    }

    public static async findByUser(userId: number): Promise<Room[]> {
        let where = `id in (
            select r.id 
            from room r 
            join room_user ru on r.id = ru.room_id
            where ru.user_id = ?)`;

        return await Room.findWhere(where, [userId]);
    }

    public async getParticipantsExceptOne(userIdToExclude: number): Promise<User[]> {
        let where = `id in (
            select u.id 
            from user u 
            join room_user ru on u.id = ru.user_id and ru.room_id = ? 
            where u.id != ?)`;

        return await User.findWhere(where, [this.getId(), userIdToExclude]);
    }

    public async getStatusToUser(userId: number): Promise<string> {
        let roomUser = await RoomUser.findByUserAndRoom(userId, this.getId());
        if (!roomUser.completed) {
            return Room.STATUS_PENDENT;
        } else {
            let roomIsNotCompleted = "room_id = ? and completed = 0";
            let roomUsers = await RoomUser.findWhere(roomIsNotCompleted, [this.getId()]);
            if (roomUsers && roomUsers.length > 0) {
                return Room.STATUS_WAITING;
            } else {
                return Room.STATUS_COMPLETED;
            }
        }
    }

}
