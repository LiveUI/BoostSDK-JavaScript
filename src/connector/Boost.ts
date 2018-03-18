import { Networking } from './Libs/Networking';
import { Auth } from './Model/Auth';
import { Token } from './Model/Token';
import { Team } from './Model/Team';
import { User } from './Model/User';

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

    public auth = (email: string, password: string): Promise<Auth> => {
        let object = {
            'email': email,
            'password': password
        };
        let promise = this.networking.postJson('/auth', object);
        return  promise.then(res => {
            var jwt = res.headers.get('authorization');
            if (jwt) {
                this.networking.jwt = jwt;
                return res.json().then(json => {
                    return {
                        json: json,
                        jwt: jwt
                    };
                });
            } else {
                throw TypeError('Missing JWT token');
            }
        }).then(data => {
            var obj = Object.assign(new Auth(), data.json);
            obj.jwt = data.jwt;
            return obj;
        });
    }

    public token = (token: string): Promise<Token> => {
        let object = {
            'token': token
        };
        let promise = this.networking.postJson('/token', object);
        return  promise.then(res => {
            var jwt = res.headers.get('authorization');
            if (jwt) {
                this.networking.jwt = jwt;
                return res.json().then(json => {
                    return {
                        json: json,
                        jwt: jwt
                    };
                });
            } else {
                throw TypeError('Missing JWT token');
            }
        }).then(data => {
            var obj = Object.assign(new Token(), data.json);
            obj.jwt = data.jwt;
            return obj;
        });
    }

    public teams = (): Promise<[Team]> => {
        let promise = this.networking.get('/teams');
        return  promise.then(res => res.json()).then(json => {
            var obj = json.map((x: JSON) => Object.assign(new Team(), x));
            return obj;
        });
    }

    public users = (): Promise<[Team]> => {
        let promise = this.networking.get('/users');
        return  promise.then(res => res.json()).then(json => {
            var obj = json.map((x: JSON) => Object.assign(new User(), x));
            return obj;
        });
    }

    public ping = (): Promise<Response> => {
        let promise = this.networking.get('/ping');
        return  promise;
    }

    public start = () => {
        this.auth('admin@liveui.io', 'admin').then(auth => {
            return this.token(auth.token);
        }).then(token => {
            return this.users().then(users => {
                alert(users);
                return  this.teams().then(teams => {
                    alert(teams);
                });
            }).catch(err => alert(err));
            
        }).catch(err => alert(err));
        
        // this.ping().then(res => alert(res)).catch(err => alert(err));
    }

}
