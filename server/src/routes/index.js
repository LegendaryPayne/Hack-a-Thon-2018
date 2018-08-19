import { Router } from 'express';
import LocationRouter from './locations'

let router = Router();

router
    .use('/locations', LocationRouter)

export default router;