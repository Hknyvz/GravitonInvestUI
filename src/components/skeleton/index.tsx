import React from 'react';

import styles from './styles.module.css';

function Skeleton({
  width,
  height,
  key,
}: {
  width?: number | string;
  height?: number;
  key?: number;
}) {
  return (
    <div className={styles.skeleton} style={{ width, height }} key={key}></div>
  );
}

export { Skeleton };
