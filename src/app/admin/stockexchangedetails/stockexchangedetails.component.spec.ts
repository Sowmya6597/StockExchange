import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockexchangedetailsComponent } from './stockexchangedetails.component';

describe('StockexchangedetailsComponent', () => {
  let component: StockexchangedetailsComponent;
  let fixture: ComponentFixture<StockexchangedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockexchangedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockexchangedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
