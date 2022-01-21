import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSumComponent } from './weather-sum.component';

describe('WeatherSumComponent', () => {
  let component: WeatherSumComponent;
  let fixture: ComponentFixture<WeatherSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
