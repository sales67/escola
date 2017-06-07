import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEQComponent } from './consultar-eq.component';

describe('ConsultarEQComponent', () => {
  let component: ConsultarEQComponent;
  let fixture: ComponentFixture<ConsultarEQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarEQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
