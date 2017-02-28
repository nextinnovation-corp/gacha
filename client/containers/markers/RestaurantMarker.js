// @flow
import React from 'react';
import cx from 'classnames';
import s from './RestaurantMarker.css';

const PropsType = {
  // lat,
  // lng,
  // name,
};

const RestaurantMarker = (props: PropsType) => (
  <section className={s.restaurantMarker}>
    <i className={cx('material-icons', s.marker)}>
      place
    </i>
    <div className={s.tooltip}>
      <h3>{props.name}</h3>
    </div>
  </section>
);

export default RestaurantMarker;
