import React from 'react';
import * as styles from '../styles/entryList.module.css';
import Entry from './entry';

const EntryList = ({ data }) => {
  return (
    <>
      <h2>Entries</h2>
      {data.map((entry, index) => {
        return <Entry key={index} dummy={entry} />;
      })}
    </>
  );
};

export default EntryList;
