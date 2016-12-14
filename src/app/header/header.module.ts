import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {NgSemanticModule} from 'ng-semantic';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSemanticModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
