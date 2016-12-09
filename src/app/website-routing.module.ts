import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const websiteRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(websiteRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WebsiteRoutingModule {}
