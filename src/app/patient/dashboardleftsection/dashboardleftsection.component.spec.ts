import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardleftsectionComponent } from './dashboardleftsection.component';

describe('DashboardleftsectionComponent', () => {
  let component: DashboardleftsectionComponent;
  let fixture: ComponentFixture<DashboardleftsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardleftsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardleftsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
