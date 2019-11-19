import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../mock-heroes';
import { Hero } from '../../model/hero';
import { HeroService } from '../../Service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
 

  constructor(private heroService: HeroService){}

    ngOnInit() {
      this.getHeros();
  }
  
   getHeros(): void{
    this.heroService.getHeroes()
                  .subscribe(heroes => this.heroes = heroes);
  }

}
