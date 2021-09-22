import React from 'react';
import * as styles from '../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Spacetagram</h1>
      </header>
      <main className={styles.contentContainer}>{children}</main>
    </>
  );
};

export default Layout;
