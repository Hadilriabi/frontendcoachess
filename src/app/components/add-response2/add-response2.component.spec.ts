import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponse2Component } from './add-response2.component';

describe('AddResponse2Component', () => {
  let component: AddResponse2Component;
  let fixture: ComponentFixture<AddResponse2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResponse2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResponse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
