import React from 'react';
import cx from 'classnames';
import s from './AddLocationButton.css';

type PropsType = {
  className?: string
}

export default function AddLocationButton(props: PropsType = {}) {
  return (
    <i className={cx('material-icons', s.addLocationButton, props.className)}>
      add_location
    </i>
  );
}
