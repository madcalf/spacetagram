import React, { useState, useEffect } from 'react';
import * as styles from '../styles/entry.module.css';
import { storageAvailable } from '../utils/storage';

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
  const storage = window.localStorage;
  const { title, url, copyright, explanation, date, media_type } = data;

  // not sure yet how to handle the linter error since i only want this effect to run on mount
  useEffect(() => {
    if (storageAvailable) {
      const stored = JSON.parse(storage.getItem(title));
      setLiked(stored.liked);
    } else {
      setLiked(false);
    }
  }, []);

  // Also here, since i only want this effect to run when liked changes, not anything else.
  useEffect(() => {
    storage.setItem(title, JSON.stringify({ liked: liked }));
  }, [liked]);

  const handleClick = () => {
    setLiked((liked) => !liked);
  };

  return (
    <article className={styles.entry}>
      <div className={styles.entryContent}>
        {media_type === 'image' ? (
          <img src={url} alt={title} />
        ) : (
          <div className={styles.videoContainer}>
            <iframe
              src={url}
              title={title}
              allow="accelerometer; autoplay; encrypted-media; fullscreen; geolocation; gyroscope; picture-in-picture"
            />
          </div>
        )}
        <h3>{title}</h3>
        <p className={styles.date}>
          {copyright ? `${copyright}: ${date}` : `${date}`}
        </p>
        <p className={styles.explanation}>{explanation}</p>
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
