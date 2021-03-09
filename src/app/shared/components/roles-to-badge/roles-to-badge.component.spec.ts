import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesToBadgeComponent } from './roles-to-badge.component';

describe('RolesToBadgeComponent', () => {
  let component: RolesToBadgeComponent;
  let fixture: ComponentFixture<RolesToBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesToBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesToBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
