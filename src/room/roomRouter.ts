import { Router } from 'express';
import { RoomService } from './roomService';

let router: Router = Router();
let service = new RoomService();

//Return the room information
router.get('/:roomId', async (req, res) => {
    let roomId = req.params.roomId;
    let room = await service.getRoom(roomId);
    res.json(room);
});

//Return the logged user's rooms
router.get('/', async (req, res) => {
    let userId = 123; //TODO get logged user
    let roomsOfUser = await service.getRoomsOfUser(userId);
    res.json(roomsOfUser);
});

router.post('/', async(req, res) => {
    //TODO add new room
})

export let roomRouter = router;
