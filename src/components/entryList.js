import React from 'react';
import * as styles from '../styles/entryList.module.css';
import Entry from './entry';

const EntryList = ({ data }) => {
  console.log('List', data);
  return (
    <div className={styles.entryList}>
      <h2>Photos of the Day</h2>
      {data &&
        data.map((item, index) => {
          return <Entry key={index} data={item} />;
        })}
    </div>
  );
};

export default EntryList;
