import React from 'react';
import * as styles from '../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Spacetagram</h1>
      </header>
      <main classname={styles.contentContainer}>{children}</main>
    </>
  );
};

export default Layout;
