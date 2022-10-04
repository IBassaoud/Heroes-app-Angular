import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Rinka Urushiba' },
      { id: 13, name: 'Yufine' },
      { id: 14, name: 'Luna' },
      { id: 15, name: 'Specter Tenebria' },
      { id: 16, name: 'Hwayoung' },
      { id: 17, name: 'Sylvian Sage Vivian' },
      { id: 18, name: 'Hajime' },
      { id: 19, name: 'Esdeath' },
      { id: 20, name: 'Osamu Dazai' },
      { id: 21, name: 'Akame' },
      { id: 22, name: 'Itachi Uchiha' },
      { id: 23, name: 'Gojô Satoru' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}