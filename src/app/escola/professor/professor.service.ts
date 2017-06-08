import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { sprintf } from "sprintf-js";
// import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProfessorService {

    myURL = 'http://172.17.0.191:8080/escola';
    urlCrearProfe = '/addPtoC?';
    urlGetProfe = '/unProfe?id=';

    constructor(private http: Http) { }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // C R E A R   U N   P R O F E S S O R
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    crearProfe(id, nom, cognoms, dni, curs, naixement) {

        const creds = 'idc=' + curs + '&idp=' + id + '&nomp=' + nom + '&cognoms=' + cognoms + '&dni=' + dni + '&naixement=' + naixement;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(this.myURL + this.urlCrearProfe, creds, {
            headers: headers
        }).map(res => {console.log("la resposta és: " + res.json()), res.json()})
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // C O N S U L T A R   U N   P R O F E S S O R
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    consultarProfe(id) {
        const profe = this.http.get(this.myURL + this.urlGetProfe + id)
        .map(res => res.json());

        return profe;
    }
}
