import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {NgSemanticModule} from "ng-semantic";

import {WebsiteComponent} from './website.component';
import {WebsiteRoutingModule} from './website-routing.module';

import {DashboardModule} from "./dashboard/dashboard.module";
import {PortfolioModule} from "./portfolio/portfolio.module";
import {ComponentsModule} from "./components/components.module"; // TODO:remove folder 'components'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgSemanticModule,
    DashboardModule,
    PortfolioModule,
    ComponentsModule, // TODO:remove later
    WebsiteRoutingModule
  ],
  declarations: [
    WebsiteComponent
  ],
  bootstrap: [WebsiteComponent]
})
export class WebsiteModule {
}
