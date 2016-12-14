import { Injectable } from '@angular/core';

export class Header {
  constructor(public name: string, public routingName: string) { }
}

let HEADER = [
  new Header('components', 'components'),
  new Header('o nas', 'about_us'),
  new Header('oferta', 'offer'),
  new Header('realizacje', 'realizations'),
  new Header('open source', 'open_source'),
  new Header('kontakt', 'contact'),
  new Header('portfolio', 'portfolio')
];

let headerPromise = Promise.resolve(HEADER);

@Injectable()
export class HeaderService {
  getHeader() { return headerPromise; }
}
