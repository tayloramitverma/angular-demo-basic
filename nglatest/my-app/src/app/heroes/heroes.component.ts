
import { Component, OnInit } from '@angular/core';
 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


	selectedHero: Hero;

	heroes: Hero[];

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}

	birthday = new Date(1991, 2, 28);

	getHeroes(): void {
    	this.heroService.getHeroes()
    	.subscribe(heroes => this.heroes = heroes.slice(0, 2));
    }
  
}
