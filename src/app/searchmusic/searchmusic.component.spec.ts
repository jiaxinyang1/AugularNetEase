import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmusicComponent } from './searchmusic.component';

describe('SearchmusicComponent', () => {
  let component: SearchmusicComponent;
  let fixture: ComponentFixture<SearchmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
