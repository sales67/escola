import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProfeComponent } from './consultar-profe.component';

describe('ConsultarProfeComponent', () => {
  let component: ConsultarProfeComponent;
  let fixture: ComponentFixture<ConsultarProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
