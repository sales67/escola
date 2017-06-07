import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { sprintf } from "sprintf-js";

import { Client } from '../client';


@Injectable()

export class RegistService {
    constructor(private http: Http) { }

    registClient(dniR, nomR, cognomsR, correuR, direccioR, telefonR): Observable<Client[]> {
        var crear = "dni=" + dniR + "&nom=" + nomR + "&cognoms=" + cognomsR + "&correu=" + correuR + "&direccio=" + direccioR + "&telefon=" + telefonR;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        var a = this.http.post('http://172.17.0.161:8080/client/add', crear, {
            headers: headers
        })
            .map(res => res.json());
        return a;
    } 

}