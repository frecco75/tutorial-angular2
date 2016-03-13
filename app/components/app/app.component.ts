import {Component} from 'angular2/core'
import {HeroService} from '../../services/hero.service'
import {DashboardComponent} from '../dashboard/dashboard.component'
import {HeroesComponent} from '../heroes/heroes.component'
import {HeroDetailComponent} from '../hero-detail/hero-detail.component'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'

let baseUrl = 'app/components/app/'

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
          <a [routerLink]="['Dashboard']">Dashboard</a>
          <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HeroService],
    styleUrls: [baseUrl + 'app.component.css']
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

export class AppComponent {

    // Attributes
    //--------------------------------------

    title: string = "Tour of Heroes"

}