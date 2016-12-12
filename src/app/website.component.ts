import {Component, OnInit, Inject, HostListener, style} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'cmp-website-root',
  templateUrl: 'website.component.html',
  styleUrls: ['website.component.scss'],
})
export class WebsiteComponent implements OnInit {

  navigation = [
    'components',
    'o nas',
    'oferta',
    'realizacje',
    'open source',
    'praca',
    'kontakt'
  ];
  switchLang: string = 'en';
  scrollTop: number;
  opacity: number;
  headerAnim: boolean = false;
  borderAnim: boolean = false;
  translateY: number;
  translateX: number;
  move: string;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {}

  changeLang(){
    this.switchLang = this.switchLang === 'pl' ? 'en' : 'pl';
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollTop = this.document.body.scrollTop;
    this.borderAnimation();
    this.headerAnimation();
    this.opacityAnimation();
    this.Xanimation();
    this.Yanimation();
    this.move = 'translateX('+this.translateX+'px) translateY('+this.translateY+'px)';
  }
  opacityAnimation(){
    this.opacity = -((this.scrollTop - 295) / 295);
    if(this.opacity > 1){
      this.opacity = 1;
    }else if (this.opacity < 0){
      this.opacity = 0;
    }
  }
  Xanimation(){
    this.translateX = -(this.scrollTop * this.scrollTop/1000);
    if(this.translateX < -80){
      this.translateX = -80;
    }
  }
  Yanimation(){
    this.translateY = -(this.scrollTop*0.41);
    if(this.translateY < -117){
      this.translateY = -117;
    }
  }
  headerAnimation(){
    if(this.scrollTop > 295){
      this.headerAnim = true;
    }else {
      this.headerAnim = false;
    }
  }
  borderAnimation(){
    if(this.scrollTop > 310){
      this.borderAnim = true;
    }else {
      this.borderAnim = false;
    }
  }
}
