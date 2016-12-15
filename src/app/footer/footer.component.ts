import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu, HeaderService }  from '../header/header.service';
import { Social, FooterService }  from './footer.service';


@Component({
  selector: 'cmp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navigation: Observable<Menu[]>;
  socials: Observable<Social[]>;

  constructor(
    private serviceMenu: HeaderService,
    private serviceSocials: FooterService) {}

  ngOnInit() {
    this.prepareMenu();
    this.prepareSocials();
  }

  prepareMenu(){
    this.navigation = Observable.fromPromise(this.serviceMenu.getHeader());
    this.navigation.subscribe(
      (value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      }
    );
  }

  prepareSocials(){
    this.socials = Observable.fromPromise(this.serviceSocials.getSocials());
    this.socials.subscribe(
      (value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      }
    );
  }

}
