import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FESComponent } from './fes.component';

describe('FESComponent', () => {
  let component: FESComponent;
  let fixture: ComponentFixture<FESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
