import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TARIFFS } from '../../assets/fake-data';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor() { }

  getTariff(): Observable<any[]> {
    return of(TARIFFS);
  }
}
