import { Model } from './Model';

export class Team implements Model {
    id: string;
    name: string;
    identifier: string;
    admin: boolean;
}
