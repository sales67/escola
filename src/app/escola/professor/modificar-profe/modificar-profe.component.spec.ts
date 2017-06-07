import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProfeComponent } from './modificar-profe.component';

describe('ModificarProfeComponent', () => {
  let component: ModificarProfeComponent;
  let fixture: ComponentFixture<ModificarProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
