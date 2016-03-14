import {Hero} from '../../models/hero'
import {RouteParams} from 'angular2/router'
import {HeroService } from '../../services/hero.service'
import {Component, OnInit} from 'angular2/core'

let baseUrl = 'app/components/hero-detail/'

@Component({
    selector: 'my-hero-detail',
    templateUrl: baseUrl + 'hero-detail.component.html',
    styleUrls: [baseUrl + 'hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

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