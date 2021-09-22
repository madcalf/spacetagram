import React from 'react';
import * as styles from '../styles/entry.module.css';

/* Each item has the following
	
copyright: " "
date:	"2021-09-21"
explanation:	"... The captured scene, however, is now frozen in time for all to enjoy."
hdurl:	"https://apod.nasa.gov/apod/image/2109/SunSpotHill_Coy_2358.jpg"
media_type:	"image"
service_version:	"v1"
title:	"Sun Spot Hill"
url	"https://apod.nasa.gov/apod/image/2109/SunSpotHill_Coy_960.jpg"
*/

const Entry = ({ data }) => {
  console.log('Entry', data);
  const mediaIsImage = data.mediaType === 'image';

  return (
    <article className={styles.entry}>
      <h3>{data.title}</h3>
      <p className={styles.date}>{data.date}</p>
      {data.copyrignt && (
        <p className={styles.copyright}>Soure: {data.copyright}</p>
      )}
      {data.media_type === 'image' ? (
        <img src={data.url} alt={data.title} />
      ) : (
        <div className={styles.videoContainer}>
          <iframe
            src={data.url}
            title={data.title}
            allow="accelerometer; autoplay; encrypted-media; fullscreen; geolocation; gyroscope; picture-in-picture"
          />
        </div>
      )}

      <p className={styles.explanation}>{data.explanation}</p>
    </article>
  );
};

export default Entry;
