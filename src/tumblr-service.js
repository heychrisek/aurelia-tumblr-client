import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {apiKey} from 'config'

@inject(HttpClient)
export class TumblrService {
  constructor(http) {
    http.configure(config => {
      config.withBaseUrl('https://api.tumblr.com/v2/blog/');
    });
    this.http = http;
  }

  tumblrPosts(tumblrName) {
    return this.http.jsonp(`${tumblrName}.tumblr.com/posts/photo?api_key=${apiKey}`, 'callback');
  }

}