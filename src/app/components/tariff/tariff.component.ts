import { Component, OnInit } from '@angular/core';
import { TariffService } from '../../services/tariff.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tariff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariff.component.html',
  styleUrl: './tariff.component.scss'
})
export class TariffComponent implements OnInit {
  tariffs: any[] = [];
  sortType = 'name';
  isTabletOrSmaller: boolean = false; 
  isMobileOrSmaller: boolean = false;
  
  constructor(private readonly tariffSerivce: TariffService){
    
  }

  ngOnInit(): void {
    this.tariffSerivce.getTariff().subscribe( result => {
      this.tariffs = result;
      this.sortTariffList();
    })
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  sortTariffList(): void {
    this.tariffs.sort( (a,b) => a[this.sortType] > b[this.sortType] ? 1 : -1);
  }

  setSortType(type: string): void {
    this.sortType = type;
    this.sortTariffList();
  }

  checkScreenSize() {
    this.isTabletOrSmaller = window.innerWidth <= 768; 
    this.isMobileOrSmaller = window.innerWidth <= 414; 
  }
}
