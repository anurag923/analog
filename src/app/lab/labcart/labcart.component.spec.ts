import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabcartComponent } from './labcart.component';

describe('LabcartComponent', () => {
  let component: LabcartComponent;
  let fixture: ComponentFixture<LabcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
