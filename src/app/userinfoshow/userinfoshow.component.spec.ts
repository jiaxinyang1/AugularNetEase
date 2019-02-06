import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoshowComponent } from './userinfoshow.component';

describe('UserinfoshowComponent', () => {
  let component: UserinfoshowComponent;
  let fixture: ComponentFixture<UserinfoshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfoshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
