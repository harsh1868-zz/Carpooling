import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamouseComponent } from './famouse.component';

describe('FamouseComponent', () => {
  let component: FamouseComponent;
  let fixture: ComponentFixture<FamouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
