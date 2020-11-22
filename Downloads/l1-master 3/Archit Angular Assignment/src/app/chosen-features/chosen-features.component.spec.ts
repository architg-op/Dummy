import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenFeaturesComponent } from './chosen-features.component';

describe('ChosenFeaturesComponent', () => {
  let component: ChosenFeaturesComponent;
  let fixture: ComponentFixture<ChosenFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
