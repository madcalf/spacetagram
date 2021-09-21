import React from 'react';
import * as styles from '../styles/entry.module.css';

const Entry = (props) => {
  return (
    <article className={styles.entry}>Here is an Entry: {props.dummy}</article>
  );
};

export default Entry;
