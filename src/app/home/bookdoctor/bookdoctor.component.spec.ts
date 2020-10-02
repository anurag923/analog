import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdoctorComponent } from './bookdoctor.component';

describe('BookdoctorComponent', () => {
  let component: BookdoctorComponent;
  let fixture: ComponentFixture<BookdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
