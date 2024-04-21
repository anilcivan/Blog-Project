"use client";
import React from 'react';
import styles from './styles.module.css';

function Error() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hata!</h1>
      <p style={styles.message}>Bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
    </div>
  );
}

export default Error