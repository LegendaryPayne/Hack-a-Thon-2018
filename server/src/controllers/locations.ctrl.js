import * as LocationsProcedures from '../procedures/locations';
import * as LocationsValidators from '../validators/locations';

export function all(req, res, next) {
    LocationsProcedures.all()
        .then((locations) => {
            res.json(locations);
        })
        .catch((err) => {
            console.error(err);
        });
}
export function read(req, res, next) {
    let id = req.params.id;

    LocationsValidators.read({
        id,
    })
        .then((sqlArgs) => {
            return LocationsProcedures.read(sqlArgs);
        })
        .then((Locations) => {
            res.json(Locations);
        })
        .catch((err) => {
            console.error(err);
        });
}

export function create(req, res, next) {
    let {location_name, address, latitude, longitude, access, location_notes  } = req.body;

    LocationsValidators.create({
        location_name,
        address,
        latitude,
        longitude,
        access,
        location_notes
    })
        .then((sqlArgs) => {
            console.log('got here 2')
            console.log(sqlArgs)
            return LocationsProcedures.create(sqlArgs);
        })
        .then((locations) => {
            console.log("got here 4")
            res.json(locations);
        })
        .catch((err) => {
            console.error(err);
        });
}

export function update(req, res, next) {
    let id = req.params.id;
    let { address, latitude, longitude, access, location_notes } = req.body;

    LocationsValidators.update({
        id,
        location_name,
        address,
        latitude,
        longitude,
        access,
        location_notes
    })
        .then((sqlArgs) => {
            return LocationsProcedures.update(sqlArgs);
        })
        .then((Locations) => {
            res.json(Locations);
        })
        .catch((err) => {
            console.error(err);
        });
}
export function destroy(req, res, next) {
    let id = req.params.id;

    LocationsValidators.destroy({
        id,
    })
        .then((sqlArgs) => {
            return LocationsProcedures.destroy(sqlArgs);
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
        });
}
/// read by radius
export function readByRadius(req, res, next) {
    let recipeid = req.params.id;

    LocationsValidators.readByRadius({
        recipeid,
    })
        .then((sqlArgs) => {
            return LocationsProcedures.readByRadius(sqlArgs);
        })
        .then((Locations) => {
            res.json(Locations);
        })
        .catch((err) => {
            console.error(err);
        });
}