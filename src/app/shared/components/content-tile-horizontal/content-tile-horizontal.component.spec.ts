import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTileHorizontalComponent } from './content-tile-horizontal.component';

describe('ContentTileHorizontalComponent', () => {
  let component: ContentTileHorizontalComponent;
  let fixture: ComponentFixture<ContentTileHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTileHorizontalComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContentTileHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
