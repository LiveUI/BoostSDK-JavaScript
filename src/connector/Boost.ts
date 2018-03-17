// import { Auth } from './Model/Auth';
import { Networking } from './Libs/Networking';

export class Config {
    public url: string = 'http://localhost:8080';
}

export class Boost {

    private networking: Networking;

    // Initialization

    public constructor(public config: Config) {
        this.networking = new Networking(config);
    }

    // Requests

    public auth = (email: string, password: string): Promise<Response> => {
        let object = {
            'email': email,
            'password': password
        };
        let promise = this.networking.postJson('/auth', object);
        return  promise;
    }

    public ping = (): Promise<Response> => {
        let promise = this.networking.get('/ping');
        return  promise;
    }

    public start = () => {
        // this.auth('admin@liveui.io', 'admin').then(res => alert(res)).catch(err => alert(err));
        this.ping().then(res => alert(res)).catch(err => alert(err));
    }

}
