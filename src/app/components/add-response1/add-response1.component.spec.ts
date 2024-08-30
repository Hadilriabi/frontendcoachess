import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponse1Component } from './add-response1.component';

describe('AddResponse1Component', () => {
  let component: AddResponse1Component;
  let fixture: ComponentFixture<AddResponse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResponse1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResponse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
