import { Model } from './Model';

export class User implements Model {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    registered: Date;
    disabled: boolean;
    su: boolean;
}
