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

//Create a new room and return 200 if success
router.post('/', async(req, res) => {
    let userId = 123; //TODO get logged user
    await service.addRoom({
        creatorId: userId,
        description: req.body.description,
        title: req.body.title,
        participants: req.body.participants,
        formId: req.body.formId,
        mode: req.body.mode,
        configs: req.body.configs
    });
    res.send(200);
})

export let roomRouter = router;
