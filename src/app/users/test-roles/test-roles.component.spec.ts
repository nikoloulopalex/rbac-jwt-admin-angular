import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRolesComponent } from './test-roles.component';

describe('TestRolesComponent', () => {
  let component: TestRolesComponent;
  let fixture: ComponentFixture<TestRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
