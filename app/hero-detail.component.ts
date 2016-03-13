import {Hero} from './hero'
import {RouteParams} from 'angular2/router'
import {HeroService } from './hero.service'
import {Component, OnInit} from 'angular2/core'

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})


export class HeroDetailComponent {

    // Constructors and ng-methods
    //--------------------------------------

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id')
        this._heroService.getHero(id).then(hero => this.hero = hero)
    }


    // Attributes
    //--------------------------------------

    hero: Hero


    // Methods
    //--------------------------------------

    goBack() {
        window.history.back();
    }
}