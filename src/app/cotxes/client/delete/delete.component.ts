import { Component, OnInit } from '@angular/core';
//import { StateService } from '../common/state.service';
import { DeleteService } from './delete.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import { Client } from '../client';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [DeleteService]
})
export class DeleteComponent implements OnInit {

    idD; deleteC; errorD; finishedD; errorServerD; errorClientD; errorBuitD;

    constructor(private deleteService: DeleteService) { }

    deleteButton() {

        this.deleteService.deleteClient(this.idD)
            .catch((error: any) => {
                if (error.status === 500 || error.status === 404) {
                    this.errorClientD = true;
                }
                else if (error.status === 400) {
                    this.errorBuitD = true;
                }
                else if (error.status === 0) {
                    this.errorServerD = true;
                }
                else {
                    this.finishedD = true;
                    return error.json();
                }
        })
          .subscribe(
          data => { this.deleteC = data },
          error => { },
          );
        this.errorServerD = false;
        this.errorClientD = false;
        this.errorBuitD = false;
        this.finishedD = false;
  }
          //() => console.log('Has eliminat el client'));

  ngOnInit() {
  }

}
