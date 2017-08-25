import { LoginService } from '../../login/login.service';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfessorService {

    //myURL = 'http://172.17.0.191:8080/escola';
    myURL = 'http://172.17.0.191:8080/demo';
    urlCrearProfe = '/addProfe?';
    urlGetProfe = '/unProfe?id=';
    urlGetProfes = '/profes?camp=';
    urlDelProfe = '/delProfe?camp=';
    urlDelProfe2 = '/delProfe2?id=';
    urlModProfe = '/modProfe?id=';
    urlEsports = '/allEsportsProfes';
    urlGetId = '/id';

    //constructor(@Inject(HomeService) private homeService: HomeService, private http: Http) { }
    //constructor(private homeService: HomeService, private http: Http) { }
    constructor(private loginService: LoginService, private http: Http) { }

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.loginService.getToken()
    });

    private headers_post = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.homeService.getToken()
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // A C O N S E G U I R   L ' I D   A C T U A L + 1
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    getIdActual() {
        return this.http
                   .get(this.myURL + this.urlGetId)
                   .map(res => res.json());
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // C R E A R   U N   P R O F E S S O R
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    crearProfe(id, nom, cognoms, dni, curs) {

        //const creds = 'idc=' + curs + '&idp=' + id + '&nomp=' + nom + '&cognoms=' + cognoms + '&dni=' + dni;
        const creds = 'idc=1' + '&idp=' + id + '&nomp=' + nom + '&cognoms=' + cognoms + '&dni=' + dni;

        //const headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(this.myURL + this.urlCrearProfe, creds, {headers: this.headers})
                   .map(res => {console.log("la resposta és: " + res.json()), res.json()})
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // C O N S U L T A R   U N   P R O F E S S O R ( JAVA i PHP)
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    consultarProfeJava(camp, valor) {
        return this.http
                   .get(this.myURL + this.urlGetProfes + camp + '&valor=' + valor, {headers: this.headers})
                   //.get(this.myURL + this.urlGetProfes + camp + '&valor=' + valor)
                   .map(res => res.json());
    }
    
    /*consultarProfeJava(id) {
        const profe = this.http
                          .get(this.myURL + this.urlGetProfe + id)
                          .map(res => res.json());

        return profe;
    }*/

    consultarProfePhp(id) {
        return this.http
                   .get('http://localhost/school/php/unProfe.php?id=' + id)
                   .map(res => res.json());
    }

    consultarProfeNode(id) {
        return this.http
                   //.get('http://localhost/school/js/escola.js?id=' + id)
                    .get(this.myURL + this.urlGetProfe + id)
                    .map(res => res.json());
    }


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // E S B O R R A R   U N   P R O F E S S O R
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    esborrarProfe(camp, valor){
        return this.http.delete(this.myURL + this.urlDelProfe + camp + "&valor=" + valor)
        .map(res => res.json());
    }

    esborrarProfe2(id){
        return this.http.delete(this.myURL + this.urlDelProfe2 + id)
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


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // C O N S U L T A R   T O T S   E L S   E S P O R T S
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    consultarEsports() {
        return this.http
                   .get(this.myURL + this.urlEsports)
                   .map(res => res.json());
    }


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // C O N S U L T A R   A L U M N E S
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    

    consultar() {
        return this.http.get('http://localhost/usuaris/').map(res => res.text());
    }
}
