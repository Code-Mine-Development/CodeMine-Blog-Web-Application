import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Posts, BlogService }  from '../blog.service';

@Component({
  selector: 'cmp-blog-gallery-slider',
  templateUrl: 'blogGallerySlider.component.html',
  styleUrls: ['blogGallerySlider.component.scss']
})
export class BlogGallerySliderComponent implements OnInit {
  images: Observable<Posts[]>;

  constructor(
    private serviceGallery: BlogService) {}

  ngOnInit() {
    this.prepareGallery();
  }

  prepareGallery(){
    this.images = Observable.fromPromise(this.serviceGallery.getBlog());
    this.images.subscribe(
      (value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      }
    );
  }

}
