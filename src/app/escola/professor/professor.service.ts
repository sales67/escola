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
    urlDelProfe = '/delProfe?id=';
    urlModProfe = '/modProfe?id=';

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
    // C O N S U L T A R   U N   P R O F E S S O R ( JAVA i PHP)
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    consultarProfeJava(id) {
        const profe = this.http
                          .get(this.myURL + this.urlGetProfe + id)
                          .map(res => res.json());

        return profe;
    }

    consultarProfePhp(id) {
        return this.http
                   .get('http://localhost/school/php/unProfe.php?id=' + id)
                   .map(res => res.json());
    }


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // E S B O R R A R   U N   P R O F E S S O R
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    esborrarProfe(id){
        return this.http.delete(this.myURL + this.urlDelProfe + id)
        .map(res => res.json());
    }


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // M O D I F I C A R   U N   P R O F E S S O R
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    modProfe(id, camp, valor) {
        const creds = 'id=' + id + '&parametre=' + camp + '&valor=' + valor;
        // const creds = 'id=' + id + '&parametre=' + camp + '&valor=' + '01/08/1950';
        
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*'); 
        
        
        return this.http.put(this.myURL + this.urlModProfe + id + '&parametre=' + camp + '&valor=' + valor, creds, {headers:headers})
        //return this.http.put(this.myURL + this.urlModProfe + id + '&parametre=' + camp + '&valor=' + '01/08/1950', creds, {headers:headers})
                        .map(res => res.json())
    }


    /*
    modEq(id, parametre, valor) {
        
        var creds = 'id=' + id + '&parametre=' + parametre + '&valor=' + valor;
        
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*'); 
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.put(this.myURL + '/demo/put?id=' + id + '&parametre=' + parametre + '&valor=' + valor, creds, {
            headers:headers
        }).map(res => res.json()).catch(this.handleError);
      
        return a;
    }
    */


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // C O N S U L T A R   A L U M N E S
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    

    consultar() {
        return this.http.get('http://localhost/usuaris/').map(res => res.text());
    }
}
