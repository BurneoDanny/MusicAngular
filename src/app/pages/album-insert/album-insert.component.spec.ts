import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumInsertComponent } from './album-insert.component';

describe('AlbumInsertComponent', () => {
  let component: AlbumInsertComponent;
  let fixture: ComponentFixture<AlbumInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumInsertComponent]
    });
    fixture = TestBed.createComponent(AlbumInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
