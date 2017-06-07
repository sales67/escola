import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEQComponent } from './crear-eq.component';

describe('CrearEQComponent', () => {
  let component: CrearEQComponent;
  let fixture: ComponentFixture<CrearEQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
