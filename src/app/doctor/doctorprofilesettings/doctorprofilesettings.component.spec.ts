import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorprofilesettingsComponent } from './doctorprofilesettings.component';

describe('DoctorprofilesettingsComponent', () => {
  let component: DoctorprofilesettingsComponent;
  let fixture: ComponentFixture<DoctorprofilesettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorprofilesettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorprofilesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
