'use client'

import { useEffect, useState } from 'react';
import styles from '../home-element.module.css';

export default function ToDebut() {

  const [debut, setDebut] = useState<number>(0);

  useEffect(() => {
    const date = new Date();
    const diffDate = date.getTime() - new Date(2022, 1, 22, date.getHours(), date.getMinutes()).getTime();
    setDebut(Math.ceil(diffDate / (1000 * 60 * 60 * 24)))
  }, [])



  return (
    <div className={styles.debutBox}>
      <div>
        데뷔일로부터 + {debut}
      </div>
    </div>
  )
}