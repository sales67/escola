import {Injectable}  from '@angular/core';
import {Http,Headers,Response}  from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'




@Injectable()

export class ListHobbyIdService{
    
    listHobbyId="";

constructor(private http: Http){}

    getHobbyId(id){
        var a = this.http.get(this.listHobbyId+"?id="+id)
            .map(res => res.json());        
        return a;
    }  
}