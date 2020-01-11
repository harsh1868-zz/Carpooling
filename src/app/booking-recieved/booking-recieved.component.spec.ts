import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRecievedComponent } from './booking-recieved.component';

describe('BookingRecievedComponent', () => {
  let component: BookingRecievedComponent;
  let fixture: ComponentFixture<BookingRecievedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingRecievedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
