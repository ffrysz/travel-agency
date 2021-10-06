import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {


  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  render() {
    return (
      <div>
        <h2 className='title'>{this.props.title}</h2>
        <div className='promoDescription'>{this.props.promoDescription}</div>
        <div className='countdown'>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

export default HappyHourAd;