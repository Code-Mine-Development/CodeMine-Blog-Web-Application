import { Injectable } from '@angular/core';

export class Social {
  constructor(public name: string, public urlPath: string) { }
}

let SOCIAL = [
  new Social('fb', 'https://www.facebook.com/codeminedevelopment/'),
  new Social('twitter', 'https://twitter.com/codeminedev'),
  new Social('in', 'https://www.linkedin.com/company/code-mine'),
  new Social('g+', ''),
  new Social('insta', '')
];

let socialPromise = Promise.resolve(SOCIAL);

@Injectable()
export class FooterService {
  getSocials() { return socialPromise; }
}
