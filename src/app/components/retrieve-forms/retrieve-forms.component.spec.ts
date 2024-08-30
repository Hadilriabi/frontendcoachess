import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveFormsComponent } from './retrieve-forms.component';

describe('RetrieveFormsComponent', () => {
  let component: RetrieveFormsComponent;
  let fixture: ComponentFixture<RetrieveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
