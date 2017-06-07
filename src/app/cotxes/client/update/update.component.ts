import { Component, OnInit } from '@angular/core';
//import { StateService } from '../common/state.service';
import { UpdateService } from './update.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import { Client } from '../client';




@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['../../cotxes.css'],
    providers: [UpdateService]
})
export class UpdateComponent implements OnInit {

    idU; dniU; nomU; cognomsU; correuU; errorBDU; direccioU; telefonU; errorClientU; updateC; errorBuitU; errorU; finishedU; errorServerU;

    constructor(private updateService: UpdateService) { }

    
    updateButton() {

        this.updateService.updateClient(this.idU, this.dniU, this.nomU, this.cognomsU,
            this.correuU, this.direccioU, this.telefonU)
            .catch((error: any) => {
                if (error.status === 500 || error.status === "500") {
                    this.errorClientU = true;
                }
                if (error.status === 400) {
                    this.errorBuitU = true;
                }
                else if (error.status === 0) {
                    this.errorServerU = true;
                }
                else if (error.status === 503) {
                    this.errorBDU = true;
                }
                else {
                    this.finishedU = true;
                    return error.json();
                }
            })
            .subscribe(data => { this.updateC = data },
             error => this.errorU = true,
                () => this.finishedU = true
      );
        this.errorBDU = false;
        this.errorU = false;
        this.finishedU = false;
        this.errorServerU = false;
        this.errorBuitU = false;
        this.errorClientU = false;
    }
    
    ngOnInit() {
    }

}
