import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosplistComponent } from './hosplist.component';

describe('HosplistComponent', () => {
  let component: HosplistComponent;
  let fixture: ComponentFixture<HosplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
