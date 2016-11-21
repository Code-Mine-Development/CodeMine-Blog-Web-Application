import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {WebsiteComponent} from "./website.component";
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [WebsiteComponent, PortfolioComponent],
  bootstrap: [WebsiteComponent]
})
export class WebsiteModule {
}
