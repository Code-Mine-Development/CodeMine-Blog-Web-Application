import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {NgSemanticModule} from 'ng-semantic';

import {WebsiteComponent} from './website.component';
import {WebsiteRoutingModule} from './website-routing.module';

import {DashboardModule} from './dashboard/dashboard.module';
import {PortfolioModule} from './portfolio/portfolio.module';
import {ComponentsModule} from './components/components.module'; // TODO:remove folder 'components'
import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSemanticModule,
    DashboardModule,
    PortfolioModule,
    ComponentsModule, // TODO:remove later
    HeaderModule,
    WebsiteRoutingModule
  ],
  bootstrap: [WebsiteComponent]
})
export class WebsiteModule {
}
