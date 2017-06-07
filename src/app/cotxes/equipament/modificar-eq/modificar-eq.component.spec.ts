import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEQComponent } from './modificar-eq.component';

describe('ModificarEQComponent', () => {
  let component: ModificarEQComponent;
  let fixture: ComponentFixture<ModificarEQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarEQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
