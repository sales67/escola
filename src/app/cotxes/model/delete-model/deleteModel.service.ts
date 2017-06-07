import {Injectable}  from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams}  from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()

export class deleteModelService{
private delUrl = 'http://172.17.0.242:8080/demo/remove?id=';
private delMarcaUrl = 'http://172.17.0.242:8080/demo/getModelXmarca?marca=';

constructor(private http: Http){}
    
deleteModel(deleteId){ 
        console.log("deleteid "+this.delUrl+deleteId);
        //var a = this.http.delete(this.delUrl+ deleteId).map(res => res.json());
    	
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       //headers.append('Access-Control-Allow-Origin', '*');       	

       return this.http.delete(this.delUrl+ deleteId, {
           headers: headers
       })
           .map((response: Response) => {  
               console.log("Actualitzat");
           })
           /*.catch((error: any) => {
               if (error.status === 500 || error.status === "500") {
                   console.log("Inexistent");                   
               }
               else if (error.status === 400 || error.status === "400") {
                   console.log("Falten dades");
               }
               else {
                   return error.json();
               }
        }) */
    }

    getByModel(model){
	var list = this.http.get(this.delMarcaUrl+ model).map(res=> res.json());
			console.log(model+ "arribat");
	return list;

	/*
	var a = this.http.get(this.listUrl)
                .map(res => res.json())
      return a;
      */
	}


getByMarca(getMarca){
	var list = this.http.get(this.delMarcaUrl+ getMarca).map(res=> res.json());
			console.log(getMarca+ "arribat");
	return list;

	/*
	var a = this.http.get(this.listUrl)
                .map(res => res.json())
      return a;
      */
	}
}