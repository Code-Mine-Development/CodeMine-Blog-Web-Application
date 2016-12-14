import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Header, HeaderService }  from '../header/header.service';
import { Social, FooterService }  from './footer.service';
import {error} from "util";

@Component({
  selector: 'cmp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navigation: Observable<Header[]>;
  socials: Observable<Social[]>;

  constructor(
    private headerService: HeaderService,
    private footerService: FooterService) { }

  ngOnInit() {
    this.navigation = Observable.fromPromise(this.headerService.getHeader());
    this.navigation.subscribe(
      (value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      }
    );

    this.socials = Observable.fromPromise(this.footerService.getSocials());
    this.socials.subscribe(
      (value)=>{
        console.log(value);
      },(error)=>{
        console.log(error);
      }
    );

  }

}
