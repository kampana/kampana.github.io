import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "environments/environment";

@Injectable()
export class DeckFetcherService {

    constructor(private http: HttpClient) {

    }

    private getNodeUrl() {
        if (environment.production === true) {
            return "http://nodejs-kampana.herokuapp.com";
        } else {
            return "http://localhost:5000"
        }
    }


    doLogin(callback) {
        this.http.get(this.getNodeUrl() + '/takiLogin').subscribe(callback);
    }

}