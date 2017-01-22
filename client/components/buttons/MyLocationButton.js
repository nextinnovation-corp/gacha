import React from 'react';
import cx from 'classnames';
import s from './MyLocationButton.css';

type PropsType = {
  className?: string
}

export default function AddMyLocationButton(props: PropsType = {}) {
  return (
    <i className={cx('material-icons', s.myLocationButton, props.className)}>
      my_location
    </i>
  );
}
