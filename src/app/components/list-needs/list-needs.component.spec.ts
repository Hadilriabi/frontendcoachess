import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNeedsComponent } from './list-needs.component';

describe('ListNeedsComponent', () => {
  let component: ListNeedsComponent;
  let fixture: ComponentFixture<ListNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
