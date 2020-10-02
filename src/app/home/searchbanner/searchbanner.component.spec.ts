import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbannerComponent } from './searchbanner.component';

describe('SearchbannerComponent', () => {
  let component: SearchbannerComponent;
  let fixture: ComponentFixture<SearchbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
