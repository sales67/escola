import {Component, OnInit,ViewChild} from '@angular/core';
//import {DeleteMarcaService} from '../delCentre/deleteMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
//import {delCentreComponent} from '../delCentre/delCentre.component';
import {delCentreService} from'../delCentre/delCentre.service';

@Component({
  selector: 'delCentre',
  templateUrl:'./delCentre.component.html',
  styleUrls: ['../../escola.css'],
  providers: [delCentreService]
})

    export class delCentreComponent{
        
        deleteId;data;logError;marques;errorBuit;finished;errorServer;

    constructor(private delCentreService: delCentreService) { }
        
     @ViewChild(delCentreComponent) delCentrecomponent;

        deleteCentre(){  
            this.delCentreService.delCentre(this.deleteId) 
            .catch((error: any) => { 
                console.log(error.status);
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
          value => this.data=value,
          error => {},
          () => {
              //this.delCentreComponent.deleteByMarca(this.deleteId);
              this.finished = true;              
          }            
      );        
        this.errorServer=false;
        this.errorBuit=false;
        this.finished=false;  
<<<<<<< HEAD
      }
}
=======
<<<<<<< HEAD

     }
}

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 12f02ade4103033fa3c55741c6ace6fdf9347794
     
     }*/
}
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
}*/
    }

>>>>>>> a4173ea1eac25dcd1ba538104604c8275a8d9520
>>>>>>> 12f02ade4103033fa3c55741c6ace6fdf9347794
>>>>>>> 62802fda020c4ad1ba2aeee0bfd176bd135a9890
>>>>>>> c7f11e3c61054ec63b7995d3b6f5d13dbc9019fb
