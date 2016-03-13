import {Component, OnInit} from 'angular2/core'
import {Hero} from '../../data/hero'
import {HeroService} from '../../services/hero.service'
import {Router} from 'angular2/router'

let baseUrl = 'app/components/dashboard/'

@Component({
    selector: 'my-dashboard',
    templateUrl: baseUrl + 'dashboard.component.html',
    styleUrls: [baseUrl + 'dashboard.component.css']
})


export class DashboardComponent implements OnInit {

    // Constructors and ng-methods
    //--------------------------------------

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }

    ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5))
    }


    // Attributes
    //--------------------------------------

    heroes: Hero[]


    // Methods
    //--------------------------------------

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }]
        this._router.navigate(link)
    }
}
