import {inject} from 'aurelia-framework';
import {TumblrService} from './tumblr-service';
import {mungePosts} from './helpers'

@inject(TumblrService)
export class App {
  constructor(tumblrService){
    this.tumblrService = tumblrService;
    this.title = 'Aurelia Tumblr Client';
    this.tumblrName = "";
    this.posts = [];
    this.selectedPhoto = null;
  }

  selectPhoto(photo) {
    this.selectedPhoto = photo;
  }

  setPosts(posts) {
    this.posts = posts;
  }

  submit() {
    const setPosts = this.setPosts.bind(this);
    return this.tumblrService.tumblrPosts(this.tumblrName)
      .then(({response}) => response.response.posts)
      .then(posts => {
        setPosts(mungePosts(posts));
      })
      .catch(err => {
        console.error("Request failed: ", err);
      })
  }
}