// footer.js

import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyrigth}>
        <p>Copyright © 2024 | Tüm hakları saklıdır</p>
      </div>
    </footer>
  );
};

export default Footer;
