import { Component, OnInit } from '@angular/core';
//import { StateService } from '../common/state.service';
import { RegistService } from './regist.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import { Client } from '../client';


@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [RegistService]
})
export class RegistComponent implements OnInit{

    dniR; nomR; cognomsR; correuR; direccioR; errorBDR; telefonR; registC; finishedR; errorServerR; errorBuitR;

    constructor(private registService: RegistService) { }
    registButton() {

        this.registService.registClient(this.dniR, this.nomR, this.cognomsR,
            this.correuR, this.direccioR, this.telefonR)
            .catch((error: any) => {
                if (error.status === 400) {
                    this.errorBuitR = true;
                }
                else if (error.status === 0) {
                    this.errorServerR = true;
                }
                else if (error.status === 503) {
                    this.errorBDR = true;
                }
                else {
                    this.finishedR = true;
                    return error.json();
                }
            })
            .subscribe(
            data => { this.registC = data },
            () => console.log('Has afegit a ' + this.nomR));
        this.errorBDR = false;
        this.errorServerR = false;
        this.errorBuitR = false;
        this.finishedR = false;
    }

    ngOnInit() {
    }

}
