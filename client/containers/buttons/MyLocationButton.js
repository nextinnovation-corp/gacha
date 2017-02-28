import React from 'react';
import cx from 'classnames';
import s from './MyLocationButton.css';

type PropsType = {
  className?: string,
  onClick?: Function,
}

export default function AddMyLocationButton(props: PropsType = {}) {
  return (
    <i
      className={cx('material-icons', s.myLocationButton, props.className)}
      onClick={props.onClick}
    >
      my_location
    </i>
  );
}
