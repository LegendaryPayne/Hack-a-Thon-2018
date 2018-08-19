import lodash from 'lodash';

//////////////////////// CRUD ////////////////////////////////////
export function all() {
    return Promise.resolve([]);
}
export function read(args) {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        if (!lodash.isFinite(id)) {
            reject(new Error('Id is not a number'));
            return;
        }

        resolve([id]);
    });
}
export function create(args) {
    let location_name = args.location_name;
    let address = args.address;
    let latitude = +args.latitude;
    let longitude = +args.longitude;
    let access = +args.access;
    let location_notes = args.location_notes;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';
        if (!lodash.isFinite(latitude)) {
            reject(new Error('Latitude is not a number'));
            return;
        }

        if (!lodash.isFinite(longitude)) {
            reject(new Error('Longitude is not a number'));
            return;
        }

        if (!lodash.isString(address)) {
            reject(new Error('Invalid Address'));
            return;
        }

        if (!lodash.isString(location_notes)) {
            reject(new Error('Invalid Notes'));
            return;
        }
        resolve([location_name, address, latitude, longitude, access, location_notes]);
    });
}
export function update(args) {
    let idlocation = +args.idlocation;
    let location_name = args.location_name;
    let address = args.address;
    let latitude = +args.latitude;
    let longitude = +args.longitude;
    let access = +args.access;
    let location_notes = args.location_notes;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.isFinite(idlocation)) {
            reject(new Error('Id is not a number'));
            return;
        }

        if (!lodash.isFinite(latitude)) {
            reject(new Error('Latitude is not a number'));
            return;
        }

        if (!lodash.isFinite(longitude)) {
            reject(new Error('Longitude is not a number'));
            return;
        }

        if (!lodash.isString(address)) {
            reject(new Error('Invalid Address'));
            return;
        }

        if (!lodash.isString(location_name)) {
            reject(new Error('Invalid Location Name'));
            return;
        }

        if (!lodash.isString(location_notes)) {
            reject(new Error('Invalid Notes'));
            return;
        }

        resolve([idlocation, location_name, address, latitude, longitude, access, location_notes]);
    });
}
export function destroy(args) {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        if (!lodash.isFinite(id)) {
            reject(new Error('Id is not a number'));
            return;
        }

        resolve([id]);
    });
}
