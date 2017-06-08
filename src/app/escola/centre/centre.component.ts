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
>>>>>>> fd63fb335926d9cb6ed818b2aa1e45244aed86e8
})


export class CentreComponent {
    constructor(private centreService: CentreService) { }
}

<<<<<<< HEAD
=======

>>>>>>> fd63fb335926d9cb6ed818b2aa1e45244aed86e8
