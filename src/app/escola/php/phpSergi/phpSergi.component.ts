import { Component, OnInit } from '@angular/core';
import { PhpSergiService } from './phpSergi.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({

 selector: 'phpSergi',
 //templateUrl:'./phpSergi.component.html',
 //styleUrls: ['../escola.css'],
 providers: [PhpSergiService]

})
export class PhpSergiComponent {
    constructor(private centreService: PhpSergiService) { }
}
