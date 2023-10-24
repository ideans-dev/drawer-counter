'use client'
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Row from '@/components/Row';


const INITIAL_TOTALS = {
  "1": 0,
  "5": 0,
  "10": 0,
  "20": 0,
  "50": 0,
  "100": 0,
}

export default function Home() {


  return (
    <main className={styles.main}>
      <div className={styles.container}>

        <Row denomination={1} />
        <Row denomination={5} />
        <Row denomination={10} />
        <Row denomination={20} />
        <Row denomination={50} />
        <Row denomination={100} />


        <div>
          TOTAL:
          <span className={styles.totalValue}>
            {total}
          </span>
        </div>
      </div>
    </main>
  )
}