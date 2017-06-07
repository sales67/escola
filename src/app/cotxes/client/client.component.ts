import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca/marca.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['../cotxes.css'],
  providers: [ClientService]
})

export class ClientComponent implements OnInit {

    id;
    clients;//es la variable del for
    telefonClient; error; finished; errorServerU; finishedU;

    constructor(private clientService: ClientService) { }

    listButton() {
        this.clientService.listClients()
            .catch((error: any) => {
                if (error.status === 0) {
                    this.errorServerU = true;
                } else {
                    this.finishedU = true;
                    return error.json();
                }
            })

            
        .subscribe(
            data => { this.clients = data; console.log(data); },)
            //() => console.log('done'))
    }

    listButtonId() {//no hem mostra els error ( retorna undefinded el data )
        this.clientService.listClient(this.telefonClient)          
            .subscribe(
            value => {
                this.clients = value;
                console.log(this.clients);

                if (this.clients.length == 0) {
                    this.error = true;
                }
            },
            error => this.error = true,
            () => this.finished = true
            );
        this.error = false;
        this.finished = false;

    }



    ngOnInit() {
        
    }

}


