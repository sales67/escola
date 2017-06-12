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
    resultat2;

    constructor(private formulariService: FormulariService) { }

    ngOnInit() { }
    
    
    // 
    validarPhp(){
        this.formulariService.validar(this.name, this.password)
            .subscribe(
                data => {
                    this.resultat = data;
                    
                    // S T A T U S  -  O K
                    if(data['status'] == 'OK') {
                        
                        this.formulariService.java(data['usuari'], data['usuarit'])
                            .subscribe(
                                data2 => {
                                    // this.resultat2 = data2;
                                    console.log(data2);
                                    if(data2 == true)
                                    {console.log("ES CERT");}
                                    
                                    if(data2 == false)
                                    {console.log("ES FALS");}
                                }
                            );
                        
                    }
                    
                    // 
                    if(data['status'] == 'FAIL') {
                        this.formulariService.java(data['usuari'], data['usuarit'])
                            .subscribe(
                                data2 => {
                                    // this.resultat2 = data2;
                                    
                                    if(data2 == true)
                                    {console.log("ES CERT");}
                                    
                                    if(data2 == false)
                                    {console.log("ES FALS");}
                                }
                            );
                    }
                    //console.log(data['status']);
                }
            );
    }
}
