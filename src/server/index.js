const compression = require('compression');
const express = require('express');
const app = express();
const path = require('path');
const publicAssetDirectory = path.resolve(__dirname, 'public');
const PORT = 3000;
const URLROUTE = '2u6x5nc0n745jdk4363l'; // TODO move arbitrary config settings out of this file

// options object for static file serving
const staticFileServingOptions = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['jpg', 'jpeg', 'png', 'svg', 'ico'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

const fileArray = [
  '0y4sxh26wpf02l7.jpg',
  '9tbjqnw28a0nrdm.jpg',
  '30zryvh0n5pp1be.jpg',
  '371dhggjnzni47a.jpg',
  'e2y9x6z753mgvk7.jpg',
  'tstew3yq53xg3q6.jpg',
  'v4l5pmj80w2xmfm.jpg',
];

// middlewares
app.use(compression());
app.use('/static', express.static(publicAssetDirectory, staticFileServingOptions));

// routes
app.get(`/${URLROUTE}`, (req, res) => res.json(fileArray));

// http://localhost:3000/static/images/kitten.jpg will give you the actual kitten pick
app.listen(PORT, () => console.log(`art app listening on port ${PORT}!`));