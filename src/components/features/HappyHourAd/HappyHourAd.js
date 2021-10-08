import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {

  constructor() {
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
    /* run this.forceUpdate() every second */
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  render() {

    const cdTime = this.getCountdownTime();

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>{this.props.title}</h2>
        <div className={styles.countdown}>{cdTime > 23 * 60 * 60 ? this.props.promoDescription : cdTime}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;