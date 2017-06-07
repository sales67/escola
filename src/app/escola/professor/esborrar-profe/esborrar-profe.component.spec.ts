import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsborrarProfeComponent } from './esborrar-profe.component';

describe('EsborrarProfeComponent', () => {
  let component: EsborrarProfeComponent;
  let fixture: ComponentFixture<EsborrarProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsborrarProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsborrarProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
