import React from 'react';
import * as styles from '../styles/entryList.module.css';
import Entry from './entry';

const EntryList = ({ data }) => {
  return (
    <>
      <h2>NASA Photos of the Day</h2>
      <div className={styles.entryList}>
        {data &&
          data.map((item, index) => {
            return <Entry key={index} data={item} />;
          })}
      </div>
    </>
  );
};

export default EntryList;
