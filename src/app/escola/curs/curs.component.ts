import { Component, OnInit } from '@angular/core';
import { CursService } from './curs.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';


@Component({
    selector: 'curs',
    templateUrl: './curs.component.html',
    styleUrls: ['../escola.css'],
    providers: [CursService]
})


export class CursComponent {
    constructor(private cursService: CursService) { }
}
