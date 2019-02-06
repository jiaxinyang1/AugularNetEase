import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsheetshowComponent } from './songsheetshow.component';

describe('SongsheetshowComponent', () => {
  let component: SongsheetshowComponent;
  let fixture: ComponentFixture<SongsheetshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsheetshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsheetshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
