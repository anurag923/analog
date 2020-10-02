import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduletimingsComponent } from './scheduletimings.component';

describe('ScheduletimingsComponent', () => {
  let component: ScheduletimingsComponent;
  let fixture: ComponentFixture<ScheduletimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduletimingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduletimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
