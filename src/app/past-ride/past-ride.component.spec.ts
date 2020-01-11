import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastRideComponent } from './past-ride.component';

describe('PastRideComponent', () => {
  let component: PastRideComponent;
  let fixture: ComponentFixture<PastRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
