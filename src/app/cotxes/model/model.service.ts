import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";

@Injectable()

export class ModelService{

}
  /*
  private cotxeUrl = 'http://localhost:8080/cotxe/listMarca';
private modelUrl = 'http://localhost:8080/cotxe/getModel?id=';
private marcaUrl = 'http://localhost:8080/cotxe/addMarca?id=%ld&nom=%s&idConce=%ld&pais=%s&any=%ld';

constructor(private http: Http){}

  errorMessage: string;
  getCotxes() {
      var a = this.http.get(this.cotxeUrl)
                .map(res => res.json())
      return a;
  }
  getModel(idMarca) {
      var a = this.http.get(this.modelUrl+idMarca)
                .map(res => res.json())
      return a;
  }
    addMarcaGet(addName,addConce,addCountry,addYear){        
        var    a = 'http://localhost:8080/cotxe/addMarca?nom='+addName+'&idConce='+addConce+'&pais='+addCountry+'&any='+addYear;
        var   b = this.http.get(a)
                    .map(res => res.json());     
        return b;
    }
    addMarcaPost(addName,addConce,addCountry,addYear){     
        var creds = "nom=" + addName + "&idConce=" + addConce + "&pais=" + addCountry + "&any=" + addYear;
        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.post('http://localhost:8080/cotxe/addMarca',creds,{
            headers:headers
        })
                    .map(res => res.json());
        return a; 
    }
    updateMarca(addId,addName,addConce,addCountry,addYear){     
        var creds = "id=" + addId +  "&name=" + addName + "&idConce=" + addConce + "&pais=" + addCountry + "&any=" + addYear;
        
        var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');       

        var a = this.http.put('http://localhost:8080/cotxe/updateMarca?id='+addId+'&name='+addName+ "&idConce=" + addConce + "&pais=" + addCountry + "&any=" + addYear,creds,{
            headers:headers
        })
                    .map(res => res.json());
        return a; 
    }
  */