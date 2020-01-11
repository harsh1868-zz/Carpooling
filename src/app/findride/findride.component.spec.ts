import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindrideComponent } from './findride.component';

describe('FindrideComponent', () => {
  let component: FindrideComponent;
  let fixture: ComponentFixture<FindrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
