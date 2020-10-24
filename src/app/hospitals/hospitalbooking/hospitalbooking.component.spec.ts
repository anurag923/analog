import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalbookingComponent } from './hospitalbooking.component';

describe('HospitalbookingComponent', () => {
  let component: HospitalbookingComponent;
  let fixture: ComponentFixture<HospitalbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
