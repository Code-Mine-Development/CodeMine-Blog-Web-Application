import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {WebsiteComponent} from './website.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [WebsiteComponent],
  bootstrap: [WebsiteComponent]
})
export class WebsiteModule {
}
