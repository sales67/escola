import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacioComponent } from './ubicacio.component';

describe('UbicacioComponent', () => {
  let component: UbicacioComponent;
  let fixture: ComponentFixture<UbicacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
