import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WebsiteComponent} from './website.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [WebsiteComponent],
  bootstrap: [WebsiteComponent]
})
export class WebsiteModule {
}
