import { Router } from 'express';
import { User } from './model/user';

let router: Router = Router();

router.get('/add/:name/:email', async (req, res) => {
    let user = new User();
    user.name = req.params.name;
    user.email = req.params.email;
    await user.save();
    res.send("User added: " + user.getId());
});

router.get('/get/:id', async (req, res) => {
    let user: User = await User.findById(req.params.id);
    res.json(user.toJson());
});

export let flibRouter = router;
