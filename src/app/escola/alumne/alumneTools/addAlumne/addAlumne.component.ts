import {Component, OnInit} from '@angular/core';
import {AddAlumneService} from './addAlumne.service';



@Component({
  selector: 'addAlumne',
  templateUrl:'./addAlumne.component.html',
  styleUrls: ['../../../escola.css'],
  providers: [AddAlumneService]
})

    export class AddAlumneComponent{
        
        canActivate() {
    console.log('AuthGuard#canActivate called');
    return true;
  }
        
        addid;addnom;addnomcentre;addidcentre;values;error;finished;errorBuit;errorServer;
           
 constructor(private addAlumneService: AddAlumneService) { } 
        
     addAlumne(){        this.addAlumneService.addAlumne(this.addid,this.addnom,this.addidcentre,this.addnomcentre)
               .catch((error: any) => {               
               if (error.status === 0 || error.status === "0") {
                   console.log("Servidor Parat"); 
                    this.errorServer=true;
                    }   
                else if (error.status === 400 || error.status === "400")
                    {
                        this.errorBuit = true; 
                    }
                else if (error.status === 500 || error.status === "500")
                    {
                        this.errorBuit = true; 
                    }
                else {                    
                   return error.json();                    
                }            
        }).subscribe(
          value => this.values=value,
          error => {},
          () => this.finished = true
      );
        this.errorBuit=false;
        this.errorServer=false;
        this.finished=false;
     } 
}