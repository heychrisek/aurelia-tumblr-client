import * as R from 'ramda'

// takes posts from Tumblr API, returns [{summary: String, timestamp: Int, post_url: String, photos: Array}]
//    photos => [{caption: String, highResSrc: String, thumbnailSrc: String}]
export const mungePosts = function(posts) {
  const mungedPosts = R.map(function(post) {
    // todo: rename post_url to postUrl
    let mungedPost = R.pick(['summary', 'timestamp', 'post_url', 'photos'], post);
    let postPhotos = R.prop('photos', post);
    let mungedPhotos = R.map(function(photo){
      return {
        caption: R.prop('caption', photo),
        highResSrc: R.path(['original_size', 'url'], photo),
        thumbnailSrc: R.prop("url", R.find(R.whereEq({width: 75, height: 75 }), R.prop("alt_sizes",photo)))
      };
    }, postPhotos);
    mungedPost.photos = mungedPhotos;
    return mungedPost;
  }, posts);
  return mungedPosts;
}