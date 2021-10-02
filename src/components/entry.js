import React, { useState, useEffect } from 'react';
import * as styles from '../styles/entry.module.css';
import { storageAvailable } from '../utils/storage';

const Entry = ({ data }) => {
  const { title, url, copyright, explanation, date, media_type } = data;
  const [liked, setLiked] = useState(() => {
    if (storageAvailable) {
      const storedItemData = JSON.parse(localStorage.getItem(title));
      return storedItemData?.liked ?? false;
    }
    return false;
  });

  useEffect(() => {
    if (storageAvailable) {
      localStorage.setItem(title, JSON.stringify({ liked: liked }));
    }
  }, [liked, title]);

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
