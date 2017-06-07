import {Component, OnInit} from '@angular/core';
import {MarcaService} from './marca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';


@Component({
    selector: 'marca',
    templateUrl: './marca.component.html',
    styleUrls: ['../cotxes.css'],
    providers: [MarcaService]
})


export class MarcaComponent {
    constructor(private marcaService: MarcaService) { }
}
