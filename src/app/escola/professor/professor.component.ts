import { Component, OnInit } from '@angular/core';

import { ProfessorService } from './professor.service';

// import { Professor } from './professor';

@Component({
    selector: 'app-professor',
    templateUrl: './professor.component.html',
    styleUrls: ['./professor.component.css'],
    providers: [ ProfessorService ]
})
export class ProfessorComponent implements OnInit {

  constructor( private professorService: ProfessorService) { }

  ngOnInit() {
  }

}
