import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProfeComponent } from './crear-profe.component';

describe('CrearProfeComponent', () => {
  let component: CrearProfeComponent;
  let fixture: ComponentFixture<CrearProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
