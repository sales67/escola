import { Component, OnInit } from '@angular/core';
import {addModelService} from './addModel.service';
@Component({
  selector: 'app-model',
  templateUrl: './addModel.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [addModelService]
})
export class addModelComponent implements OnInit {
	test = "Si es veu aixo, funciona";
  constructor(private addModelService: addModelService) { }

  addName;
  addMarca;
  addMarcaPost(){        this.addModelService.addModelPost(this.addName,this.addMarca)
               .subscribe(
                data => { this.addName = data;},    
                () => console.log('has afegit la marca: '+this.addName)
      );} 
  ngOnInit() {
  }

}