import { Model } from './Model';
import { User } from './User';

export class Token implements Model {
    id: string;
    expires: number;
    user: User;
    jwt: string;
}
