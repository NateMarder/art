import React, { useState, useEffect } from 'react';
import jsonp from 'jsonp';
import LightboxWrapper from './LightboxWrapper';

export const HomePage = () => {
  const FLICKR_API_URL = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=455b5e2fa6b951f9b9ab58a86d5e1f8a&photoset_id=72157708141247864&user_id=146659101@N08&format=json&per_page=20&extras=url_m,url_c,url_l,url_h,url_o`;
  const [photos, setPhotos] = useState([]);

  const photoHandler = (err, responseData) => {
    let formattedPhotos = responseData.photoset.photo.map(item => ({
      src: item.url_l,
      width: item.width_o,
      height: item.height_o,
      title: item.title,
      alt: item.title,
      key: item.id,
      srcSet: [
        `${item.url_m} ${item.width_m}w`,
        `${item.url_c} ${item.width_c}w`,
        `${item.url_l} ${item.width_l}w`,
        `${item.url_h} ${item.width_h}w`,
      ],
      sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
    }));

    setPhotos([...photos, ...formattedPhotos]);
  }

  useEffect(() => {
    if (photos.length < 20) {
      jsonp(FLICKR_API_URL, { name: 'jsonFlickrApi' }, photoHandler);
    }
  }, []);


  if (photos) {
    return (
      <div className="App">
        <LightboxWrapper photos={photos} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <div id="msg-app-loading" className="loading-msg">
          Loading
      </div>
      </div>
    );
  }
}
