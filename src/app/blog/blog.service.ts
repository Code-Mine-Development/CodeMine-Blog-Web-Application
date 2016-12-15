import { Injectable } from '@angular/core';

export class Posts {
  constructor(public title: string, public subTitle, public imgUrl: string) { }
}

let POSTS = [
  new Posts('Taking care of large entities in DDD project',
    'read models',
    'https://images.unsplash.com/photo-1467791702337-32e58d17bb6d?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop='),
  new Posts('Post2',
    'read models',
    'https://images.unsplash.com/photo-1468224970805-92d72c619545?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop='),
  new Posts('Post3',
    'read models',
    'https://images.unsplash.com/photo-1470165511815-34e78ff7a111?dpr=1&auto=format&fit=crop&w=1500&h=998&q=80&cs=tinysrgb&crop='),
];

let blogPromise = Promise.resolve(POSTS);

@Injectable()
export class BlogService {
  getBlog() { return blogPromise; }
}
