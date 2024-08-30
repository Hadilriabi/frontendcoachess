import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponse3Component } from './add-response3.component';

describe('AddResponse3Component', () => {
  let component: AddResponse3Component;
  let fixture: ComponentFixture<AddResponse3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResponse3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResponse3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
