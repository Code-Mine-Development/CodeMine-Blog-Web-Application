import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-website-root',
  templateUrl: 'website.component.html',
  styleUrls: ['website.component.scss']
})
export class WebsiteComponent implements OnInit {

  navigation = [
    'o nas',
    'oferta',
    'realizacje',
    'open source',
    'praca',
    'kontakt',
    'portfolio'
  ];
  language = [
    'pl',
    'en'
  ];
  constructor() { }

  ngOnInit() {}

}
