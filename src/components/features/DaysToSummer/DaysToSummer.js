import React from 'react';
// import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  constructor() {
    super();
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextSummer = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
    if (currentTime.getUTCMonth() > 5) {
      nextSummer.setUTCFullYear(currentTime.getUTCFullYear() + 1);
    }

    return Math.ceil((nextSummer.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24));
  }

  render() {

    const cdTime = this.getCountdownTime();

    if (cdTime > 1 && cdTime < 365 - 92) {
      return (
        <div className={styles.component}>
          <h2 className={styles.title}>{cdTime} days to summer.</h2>
        </div>
      );
    } else if (cdTime === 1) {
      return (
        <div className={styles.component}>
          <h2 className={styles.title}>{cdTime} day to summer!</h2>
        </div>
      );
    } else {
      return (
        <div className={styles.component}>
          <h2 className={styles.title}></h2>
        </div>
      );
    }
  }
}

export default DaysToSummer;