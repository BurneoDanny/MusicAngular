import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongInsertComponent } from './song-insert.component';

describe('SongInsertComponent', () => {
  let component: SongInsertComponent;
  let fixture: ComponentFixture<SongInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongInsertComponent]
    });
    fixture = TestBed.createComponent(SongInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
