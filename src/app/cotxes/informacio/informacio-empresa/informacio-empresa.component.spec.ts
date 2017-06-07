import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacioEmpresaComponent } from './informacio-empresa.component';

describe('InformacioEmpresaComponent', () => {
  let component: InformacioEmpresaComponent;
  let fixture: ComponentFixture<InformacioEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacioEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
