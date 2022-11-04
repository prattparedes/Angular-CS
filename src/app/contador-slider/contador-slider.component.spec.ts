import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorSliderComponent } from './contador-slider.component';

describe('ContadorSliderComponent', () => {
  let component: ContadorSliderComponent;
  let fixture: ComponentFixture<ContadorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
