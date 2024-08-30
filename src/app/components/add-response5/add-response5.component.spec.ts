import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponse5Component } from './add-response5.component';

describe('AddResponse5Component', () => {
  let component: AddResponse5Component;
  let fixture: ComponentFixture<AddResponse5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResponse5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResponse5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
