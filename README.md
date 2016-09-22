# aurelia-tumblr-client
Simple Aurelia client to get and display photos from Tumblr. Built to using Aurelia, Ramda, and the Tumblr API.

Submitting the form will return any photos from that Tumblr, which will display as thumbnails and can be clicked to view full-size.

![aurelia_tumblr_client.gif](http://s22.postimg.org/7h450er01/aurelia_tumblr_client.gif)

# Usage

`git clone` this repo.

`npm install` to install npm modules.

Add a src/config.js file with your Tumblr API key (`export const apiKey = 'API_KEY_HERE';`).

`au run` to serve application at localhost:9000.

# Tests

`au test` to run the tests (just one for now).
