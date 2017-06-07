import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsborrarEQComponent } from './esborrar-eq.component';

describe('EsborrarEQComponent', () => {
  let component: EsborrarEQComponent;
  let fixture: ComponentFixture<EsborrarEQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsborrarEQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsborrarEQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
