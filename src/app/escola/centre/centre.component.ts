import { Component, OnInit } from '@angular/core';
import { CentreService } from './centre.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({
<<<<<<< HEAD

=======
>>>>>>> 12f02ade4103033fa3c55741c6ace6fdf9347794

 selector: 'centre',
 templateUrl:'./centre.component.html',
 styleUrls: ['../escola.css'],
 providers: [CentreService]

})
export class CentreComponent {
    constructor(private centreService: CentreService) { }
}

