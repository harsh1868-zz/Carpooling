import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveRideComponent } from './live-ride.component';

describe('LiveRideComponent', () => {
  let component: LiveRideComponent;
  let fixture: ComponentFixture<LiveRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
