import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShopsComponent } from './all-shops.component';

describe('AllShopsComponent', () => {
  let component: AllShopsComponent;
  let fixture: ComponentFixture<AllShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
