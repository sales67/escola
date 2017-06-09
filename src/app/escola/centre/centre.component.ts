import { Component, OnInit } from '@angular/core';
import { CentreService } from './centre.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({
<<<<<<< HEAD

=======
>>>>>>> 71299aba1ce747a0640211b543042e02305be991

 selector: 'centre',
 templateUrl:'./centre.component.html',
 styleUrls: ['../escola.css'],
 providers: [CentreService]

})
export class CentreComponent {
    constructor(private centreService: CentreService) { }
}

