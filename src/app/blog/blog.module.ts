import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';

import {NgSemanticModule} from 'ng-semantic';

import {BlogComponent} from './blog.component';
import {BlogGallerySliderComponent} from './gallerySlider/blogGallerySlider.component';

import {BlogService} from './blog.service';

import {BlogRoutingModule} from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSemanticModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogComponent,
    BlogGallerySliderComponent
  ],
  providers: [BlogService]
})
export class BlogModule {
}
