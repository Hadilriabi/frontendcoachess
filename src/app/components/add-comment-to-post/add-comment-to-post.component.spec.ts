import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentToPostComponent } from './add-comment-to-post.component';

describe('AddCommentToPostComponent', () => {
  let component: AddCommentToPostComponent;
  let fixture: ComponentFixture<AddCommentToPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentToPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommentToPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
