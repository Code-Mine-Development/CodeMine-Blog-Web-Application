import { Injectable } from '@angular/core';

export class Social {
  constructor(public name: string, public urlPath: string) { }
}

let SOCIAL = [
  new Social('fb', 'fb'),
  new Social('twitter', 'twitter'),
  new Social('in', 'in'),
  new Social('g+', 'g+'),
  new Social('insta', 'insta')
];

let socialPromise = Promise.resolve(SOCIAL);

@Injectable()
export class FooterService {
  getSocials() { return socialPromise; }
}
