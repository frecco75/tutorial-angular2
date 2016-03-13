import {Component, OnInit} from 'angular2/core'
import {Hero} from '../../models/hero'
import {HeroDetailComponent} from '../hero-detail/hero-detail.component'
import {HeroService} from '../../services/hero.service'
import {Router} from 'angular2/router'

let baseUrl = 'app/components/heroes/'

@Component({
    selector: 'my-heroes',
    templateUrl: baseUrl + 'heroes.component.html',
    styleUrls:  [baseUrl + 'heroes.component.css'],
    directives: [HeroDetailComponent]
})


export class HeroesComponent implements OnInit {

    // Constructors and ng-methods
    //--------------------------------------

    constructor(
        private _heroService: HeroService,
        private _router: Router) {
    }

    ngOnInit() {
        this.getHeroes()
    }


    // Attributes
    //--------------------------------------

    subtitle: string = "My Heroes"
    heroes: Hero[]
    selectedHero: Hero


    // Methods
    //--------------------------------------

    onSelect(hero: Hero) {
        this.selectedHero = hero
    }

    getHeroes() {
        //this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes)
        this._heroService.getHeroes().then(heroes => this.heroes = heroes)
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }])
    }
}


