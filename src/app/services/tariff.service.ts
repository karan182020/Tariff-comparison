import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TARIFFS } from '../../assets/tariff-data';
import { Tariff } from '../models/tariff.model';

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  constructor() {}

  getTariff(): Observable<Tariff[]> {
    return of(TARIFFS);
  }
}
