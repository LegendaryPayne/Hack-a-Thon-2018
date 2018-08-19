import * as Locations from '../controllers/locations.ctrl';
import { Router } from 'express';

let router = Router();


router
    .get('/', Locations.all)
    .get('/:id', Locations.read)
    .post('/', Locations.create)
    .put('/:id', Locations.update)
    .delete('/:id', Locations.destroy)


export default router;