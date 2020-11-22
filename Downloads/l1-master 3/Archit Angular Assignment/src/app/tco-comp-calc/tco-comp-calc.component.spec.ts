import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoCompCalcComponent } from './tco-comp-calc.component';

describe('TcoCompCalcComponent', () => {
  let component: TcoCompCalcComponent;
  let fixture: ComponentFixture<TcoCompCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcoCompCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoCompCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
