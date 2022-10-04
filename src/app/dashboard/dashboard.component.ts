import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


/* 
The class is like the HeroesComponent class.
It defines a heroes array property
The constructor expects Angular to inject the HeroService into a private heroService property
The ngOnInit() lifecycle hook calls getHeroes()

This getHeroes() returns the sliced list of heroes at positions 1 and 5, returning only Heroes two, three, four, and five.
*/
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}