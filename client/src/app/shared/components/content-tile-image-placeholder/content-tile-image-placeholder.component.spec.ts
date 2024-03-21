import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTileImagePlaceholderComponent } from './content-tile-image-placeholder.component';

describe('ContentTileImagePlaceholderComponent', () => {
  let component: ContentTileImagePlaceholderComponent;
  let fixture: ComponentFixture<ContentTileImagePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTileImagePlaceholderComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContentTileImagePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
