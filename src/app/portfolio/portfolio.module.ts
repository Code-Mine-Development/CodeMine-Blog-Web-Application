import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioRoutingModule} from './portfolio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule {
}
