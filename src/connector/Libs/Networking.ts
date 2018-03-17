import { Dictionary } from './Dictionary';
import { Config } from '../Boost';

export interface Networkable {}

export class Networking implements Networkable {

    config: Config;

    // Initialization

    public constructor(public conf: Config) {
        this.config = conf;
    }

    // Requests

    public get(path: string, headers: Dictionary<string> = {}): Promise<Response> {
        path = this.config.url + path;
        const promise = new Promise<Response>((resolve, reject) => {
            return window.fetch(path, {
                headers: this.headers(headers),
                method: 'GET'
            });
        });
        return promise;
    }

    public postJson = (path: string, json: Object, headers: Dictionary<string> = {}): Promise<Response> => {
        path = this.config.url + path;
        const promise = window.fetch(path, {
            body: JSON.stringify(json),
            headers: this.headers(headers),
            method: 'POST'
        });
        return promise;
    }

    public postData = (path: string, data: string, headers: Dictionary<string> = {}): Promise<Response> => {
        path = this.config.url + path;
        const promise = window.fetch(path, {
            body: data,
            headers: this.headers(headers),
            method: 'POST'
        });
        return promise;
    }

    put = (path: string, json: JSON, headers: Dictionary<string> = {}): Promise<Response> => {
        path = this.config.url + path;
        const promise = window.fetch(path, {
            body: JSON.stringify(json),
            headers: this.headers(headers),
            method: 'PUT'
        });
        return promise;
    }

    patch = (path: string, json: JSON, headers: Dictionary<string> = {}): Promise<Response> => {
        path = this.config.url + path;
        const promise = window.fetch(path, {
            body: JSON.stringify(json),
            headers: this.headers(headers),
            method: 'PATCH'
        });
        return promise;
    }

    delete = (path: string, headers: Dictionary<string> = {}): Promise<Response> => {
        path = this.config.url + path;
        const promise = new Promise<Response>((resolve, reject) => {
            return window.fetch(path, {
                headers: this.headers(headers),
                method: 'DELETE'
            });
        });
        return promise;
    }

    // Private interface

    private headers = (headers: Dictionary<string>): Dictionary<string> => {
        headers['Content-Type'] = 'application/json';
        headers['User-Agent'] = 'BoostSDK/1.0-JS';
        return headers;
    }

}
