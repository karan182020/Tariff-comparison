import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffComponent } from './tariff.component';
import { of } from 'rxjs';
import { TariffService } from '../../services/tariff.service';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from '../../shared/pipes/number-format.pipe';

describe('TariffComponent', () => {
  let component: TariffComponent;
  let fixture: ComponentFixture<TariffComponent>;
  let tariffServiceStub: Partial<TariffService>;

  beforeEach(async () => {
    tariffServiceStub = {
      getTariff: () => of([
        { name: 'Tariff A', price: 12345 },
        { name: 'Tariff B', price: 11745 },
      ]),
    };
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, TariffComponent, NumberFormatPipe],
      providers: [{ provide: TariffService, useValue: tariffServiceStub }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tariffs', () => {
    component.ngOnInit();
    expect(component.tariffs.length).toBe(2);
    expect(component.tariffs[0].name).toBe('Tariff A');
  });

  it('should sort tariffs correctly by name', () => {
    component.tariffs = [
      { name: 'Tariff B', value: 12345 },
      { name: 'Tariff A', value: 11745 },
    ];
    component.sortType = 'name';
    component.sortTariffList();

    expect(component.tariffs[0].name).toBe('Tariff A');
    expect(component.tariffs[1].name).toBe('Tariff B');
  });

  it('should set isMobileOrSmaller correctly', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(500);
    component.checkScreenSize();
    expect(component.isMobileOrSmaller).toBeTrue();
  });
});
