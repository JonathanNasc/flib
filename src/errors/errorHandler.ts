import { Request } from 'express';
import { Response } from 'express';
import { NextFunction } from 'express';

export let errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        res.status(500);
        res.send({error: err.message});
    }
}