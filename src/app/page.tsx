import React from 'react';
import styles from './page.module.css';
import DrawerCounter from '@/components/DrawerCounter/DrawCounter';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Skylinks at Buchanan Fields</h2>
      <DrawerCounter />
    </main>
  )
}