import { Model } from './Model';

export class Auth implements Model {
    id = null;
    expires = 213234;
    token = 'null';
    
    decode(json: Object): Object {
        return this;
    }
}
