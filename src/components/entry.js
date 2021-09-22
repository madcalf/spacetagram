import React, { useState } from 'react';
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
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked((liked) => !liked);
  };

  return (
    <article className={styles.entry}>
      <div className={styles.entryContent}>
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
        <h3>{data.title}</h3>
        <p className={styles.date}>
          {data.copyright ? `${data.copyright}: ${data.date}` : `${data.date}`}
        </p>
        <p className={styles.explanation}>{data.explanation}</p>
        <button
          type="button"
          onClick={handleClick}
          className={liked ? styles['liked'] : styles['like']}
        >
          {liked ? '😀' : 'Like'}
        </button>
      </div>
    </article>
  );
};

export default Entry;
