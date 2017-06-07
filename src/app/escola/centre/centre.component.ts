import {Component, OnInit} from '@angular/core';
import {CentreService} from './centre.service';



@Component({
  selector: 'centre',
  templateUrl:'./centr.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [CentreService]
})

    export class CentreComponent{
        

           
 constructor(private centreService: CentreService) { } 
              marques; 
        
    listMarca(){
     this.listMarcaAllService.getMarques()
                .subscribe(
                data => { this.marques = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}
}