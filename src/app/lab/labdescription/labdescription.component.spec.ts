import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabdescriptionComponent } from './labdescription.component';

describe('LabdescriptionComponent', () => {
  let component: LabdescriptionComponent;
  let fixture: ComponentFixture<LabdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
