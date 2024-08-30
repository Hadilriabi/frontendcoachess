import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentsComponentComponent } from './post-comments-component.component';

describe('PostCommentsComponentComponent', () => {
  let component: PostCommentsComponentComponent;
  let fixture: ComponentFixture<PostCommentsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCommentsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCommentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
