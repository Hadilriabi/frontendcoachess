import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponse4Component } from './add-response4.component';

describe('AddResponse4Component', () => {
  let component: AddResponse4Component;
  let fixture: ComponentFixture<AddResponse4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResponse4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResponse4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
