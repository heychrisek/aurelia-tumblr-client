import {mungePosts} from '../../src/helpers';
import * as R from 'ramda'

describe('the mungePosts helper', () => {
  it('takes Tumblr API response and reformats the JSON', () => {
    const results = mungePosts(samplePostsResponse);
    const sampleKeys = R.keys(results[0]);
    expect(sampleKeys).toContain("summary");
    expect(sampleKeys).toContain("timestamp");
    expect(sampleKeys).toContain("post_url");
    expect(sampleKeys).toContain("photos");

    const samplePhotosObjKeys = R.keys(results[0].photos[0]);
    expect(samplePhotosObjKeys).toContain("caption");
    expect(samplePhotosObjKeys).toContain("highResSrc");
    expect(samplePhotosObjKeys).toContain("thumbnailSrc");
  });
});


const samplePostsResponse = [
  {
    "blog_name": "montanamoment",
    "id": 150635933494,
    "post_url": "http://montanamoment.tumblr.com/post/150635933494/take-it-all-in-sometimes-you-have-to-stop-ig",
    "timestamp": 1474295838,
    "state": "published",
    "short_url": "https://tmblr.co/ZjV_ks2CIcUys",
    "summary": "Take it all in.  Sometimes you have to stop. 📷: IG user kmun71 #MontanaMoment",
    "photos": [
      {
        "caption": "",
        "alt_sizes": [
          {
            "url": "https://66.media.tumblr.com/5abc87180c119faa9fe975225808c518/tumblr_odr9y6lzBW1s8a70io1_1280.jpg",
            "width": 1200,
            "height": 800
          },
          {
            "url": "https://66.media.tumblr.com/5abc87180c119faa9fe975225808c518/tumblr_odr9y6lzBW1s8a70io1_75sq.jpg",
            "width": 75,
            "height": 75
          }
        ],
        "original_size": {
          "url": "https://66.media.tumblr.com/5abc87180c119faa9fe975225808c518/tumblr_odr9y6lzBW1s8a70io1_1280.jpg",
          "width": 1200,
          "height": 800
        }
      }
    ],
    "can_send_in_message": true,
    "notes": [
      {
        "blog_name": "nordicfeelings",
        "blog_uuid": "nordicfeelings.tumblr.com",
        "blog_url": "http://nordicfeelings.tumblr.com/",
        "followed": false,
        "avatar_shape": "square",
        "type": "reblog",
        "timestamp": 1474353039,
        "post_id": "150671430644",
        "reblog_parent_blog_name": "montanamoment"
      }
    ],
    "can_like": true,
    "can_reblog": true,
    "display_avatar": true
  }
];