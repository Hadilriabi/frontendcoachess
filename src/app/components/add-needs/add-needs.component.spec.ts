import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedsComponent } from './add-needs.component';

describe('AddNeedsComponent', () => {
  let component: AddNeedsComponent;
  let fixture: ComponentFixture<AddNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
