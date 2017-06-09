import { Component, OnInit } from '@angular/core';
import { FormulariService } from './formulari.service';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css'],
    providers: [ FormulariService ]
})
export class FormulariComponent implements OnInit {
    
    name;
    password;
    resultat;

    constructor(private formulariService: FormulariService) { }

    ngOnInit() { }
    
    validarPhp(){
        this.formulariService.validar(this.name, this.password)
            .subscribe(
                data => {
                    this.resultat = data;
                    
                    console.log(data['status']);
                }
            );
    }
}
