import React, { useState, useEffect } from 'react';
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
  return (
    <article className={styles.entry}>
      <h3>{data.title}</h3>
      <p className="date">{data.date}</p>
      <p className="copyright">Soure: {data.copyright}</p>
      <img src={data.url} alt={data.title} />
      <p className="explanation">{data.explanation}</p>
    </article>
  );
};

export default Entry;
