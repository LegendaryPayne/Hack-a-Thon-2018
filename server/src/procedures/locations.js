import { crud, SQL_PREFIX, SQL_GET, SQL_DELETE } from '../procedures/base';
import {rows} from '../config/db';


const MODEL_NAME = `Locations`;
export let { all, create, read, update, destroy } = crud(MODEL_NAME);

export function readByRadius(args) {
    return rows(`${SQL_GET}${MODEL_NAME}BasedonRadius`, args);
}
