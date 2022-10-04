import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// You always import the Component symbol from the Angular core library and annotate the component class with @Component.
// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export the component class so you can import it elsewhere … like in the AppModule.
export class HeroesComponent implements OnInit {
  heroes:  Hero[] = [];
  selectedHero?: Hero;

  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site
  constructor(private heroService: HeroService, public messageService: MessageService) { 
    // When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  
    // Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. 
    // The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
    // Instead, call getHeroes() inside the ngOnInit lifecycle hook 
    // and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  }

  ngOnInit(): void {
    // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component.
    // It's a good place to put initialization logic.
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent : Selected hero id=${hero.id}`);
    console.log(this.selectedHero);    
  }

  getHeroes(): void {
    // getHeroes(): void {
    //   this.heroes = this.heroService.getHeroes();
    // }
    // Observable.subscribe() is the critical difference. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.

    // That won't work when the HeroService is actually making requests of a remote server.
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
    // The new version waits for the Observable to emit the array of heroes, which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    // This asynchronous approach works when the HeroService requests heroes from the server.
  }

}
