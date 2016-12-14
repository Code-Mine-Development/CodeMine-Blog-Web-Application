import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {NgSemanticModule} from 'ng-semantic';
import {FooterComponent} from './footer.component';
import {RouterModule} from '@angular/router';
import {FooterService} from './footer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSemanticModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [FooterComponent],
  providers: [FooterService]
})
export class FooterModule {
}
