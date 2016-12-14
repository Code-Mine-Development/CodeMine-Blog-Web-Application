import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';

import {NgSemanticModule} from 'ng-semantic';

import {ComponentsComponent} from './components.component';
import {ComponentsRoutingModule} from './components-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSemanticModule,
    ComponentsRoutingModule
  ],
  declarations: [ComponentsComponent],
  exports: [ComponentsComponent]
})
export class ComponentsModule {
}
