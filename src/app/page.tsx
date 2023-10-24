import React from 'react';
import styles from './page.module.css';
import DrawerCounter from '@/components/DrawerCounter/DrawCounter';

export default function Home() {
  return (
    <main className={styles.main}>
      <DrawerCounter />
    </main>
  )
}