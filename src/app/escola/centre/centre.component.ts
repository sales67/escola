import { Component, OnInit } from '@angular/core';
import { CentreService } from './centre.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({
<<<<<<< HEAD


 selector: 'centre',
 templateUrl:'./centre.component.html',
 styleUrls: ['../escola.css'],
 providers: [CentreService]

=======
    selector: 'centre',
    templateUrl: './centre.component.html',
    styleUrls: ['../escola.css'],
    providers: [CentreService]
>>>>>>> 4be65af2a13143fcb2744cccafc1f2f8a7149422
})
export class CentreComponent {
    constructor(private centreService: CentreService) { }
}
<<<<<<< HEAD
           
=======
>>>>>>> 4be65af2a13143fcb2744cccafc1f2f8a7149422
