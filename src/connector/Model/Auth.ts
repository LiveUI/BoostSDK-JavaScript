import { Model } from './Model';
import { User } from './User';

export class Auth implements Model {
    id: string;
    expires: number;
    token: string;
    user: User;
    jwt: string;
}
