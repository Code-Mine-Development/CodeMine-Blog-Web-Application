import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {WebsiteComponent} from './website.component';
import {WebsiteRoutingModule} from './website-routing.module';

import {DashboardModule} from "./dashboard/dashboard.module";
import {PortfolioModule} from "./portfolio/portfolio.module";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    PortfolioModule,
    WebsiteRoutingModule
  ],
  declarations: [
    WebsiteComponent
  ],
  bootstrap: [WebsiteComponent]
})
export class WebsiteModule {
}
