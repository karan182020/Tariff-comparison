import { Tariff } from '../app/models/tariff.model';

export const TARIFFS: Tariff[] = [
  {
    id: 1,
    name: 'Tariff A',
    downloadSpeed: 100,
    uploadSpeed: 20,
    benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 12345,
  },
  {
    id: 2,
    name: 'Tariff B',
    downloadSpeed: 90,
    uploadSpeed: 22,
    benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 11745,
  },
  {
    id: 3,
    name: 'Tariff C',
    downloadSpeed: 80,
    uploadSpeed: 15,
    benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
    price: 11545,
  },
];
