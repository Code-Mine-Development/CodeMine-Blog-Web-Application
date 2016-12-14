import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';


const componentsRoutes: Routes = [
  { path: 'components', component: ComponentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(componentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule {}
