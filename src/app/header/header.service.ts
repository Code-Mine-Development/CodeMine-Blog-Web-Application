import { Injectable } from '@angular/core';

export class Menu {
  constructor(public name: string, public routingName: string) { }
}

let MENU = [
  new Menu('components', 'components'),
  new Menu('o nas', 'about_us'),
  new Menu('oferta', 'offer'),
  new Menu('realizacje', 'realizations'),
  new Menu('portfolio', 'portfolio'),
  new Menu('blog', 'blog'),
  new Menu('kontakt', 'contact')
];

let headerPromise = Promise.resolve(MENU);

@Injectable()
export class HeaderService {
  getHeader() { return headerPromise; }
}
